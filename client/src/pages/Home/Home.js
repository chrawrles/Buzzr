import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import { Input } from "../../components/Form";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Home.css";


class Home extends Component {
  state = {
    restaurants: [],
    name: "",
    zip: "",
    img: "",
    waittime: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.getRestaurant({
        name: this.state.name,
      })
        .then(res => this.searchRestaurants(this.state.name))
        .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res =>
        this.setState({ restaurants: res.data, name: "", category: "", city: "", zip: "", img: "", waittime: ""  })
      )
      .catch(err => console.log(err));
  };

  searchRestaurants = id => {
    console.log(id)
    API.getRestaurant(id)
      .then(res =>
        this.setState({ restaurants: res.data, name: "", category: "", city: "", zip: "", img: "", waittime: ""  })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Nav />
          <Container>
          <Row>
              <Col size="md-12" className="searchbar">
              <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Search restaurants"/>
                <button onClick={this.handleFormSubmit}></button>
              </form>
              </Col>
              </Row>
              <Row>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <Col size="lg-3 xl-3 md-6 xs-6" className="resultbox" key={restaurant._id}>

                      <Link to={"/checkin/" + restaurant._id}>
                        <Row className="homerow">
                          <Col className="homeimages" size=" md-12">
                              <img alt='res' className="homeimg" src={restaurant.img} />
                          </Col>
                          <Col size="md-12 xs-12" className="homedetails">
                              {restaurant.name}
                              </Col>
                              <Col size="md-12" className="locationdetail">
                              {restaurant.zip}
                          </Col>
                        </Row>
                        <Row className='homedetail'>
                        <Col size="xs-12 sm-12 md-12" className="waitdetail">
                        Current Wait Time - {restaurant.waittime}
                        </Col>
                        </Row>
                        </Link>
                       <hr/>

                      </Col>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
