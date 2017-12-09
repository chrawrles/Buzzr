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
          <Container fluid>
          <Row>
              <Col size="md-12" className="homespacing">
              <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Search restaurants"/>
                <button onClick={this.handleFormSubmit}></button>
              </form>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <Col size="sm-12 md-12" key={restaurant._id}>

                      <Link to={"/checkin/" + restaurant._id}>
                        <Row className="homerow">
                          <Col className="homeimages" size="xs-5 sm-6 md-6">
                              <img alt='res' className="homeimg" src={restaurant.img} />
                          </Col>
                          <Col size="xs-4 sm-4 md-4" className="homedetails">
                              {restaurant.name}
                              <br />
                              <br />
                              {restaurant.zip}
                          </Col>
                        </Row>
                        <Row className='homedetail'>
                        <Col size="xs-12 sm-12 md-12" className="homedetail">
                        {restaurant.waittime} min. wait
                        </Col>
                        </Row>
                        </Link>
                       <br/>

                      </Col>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
