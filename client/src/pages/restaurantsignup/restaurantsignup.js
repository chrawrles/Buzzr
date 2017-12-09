import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import Footer from "../../components/Footer";
import "./restaurantsignup.css";
import Nav from "../../components/Nav";

class restaurantsignup extends Component {
    state = {
      restaurants: [],
      name: "",
      zip: "",
      img: "",
      waittime: 0,
    };

    componentDidMount() {
      this.loadRestaurants();
    }

    loadRestaurants = () => {
      API.getRestaurants()
        .then(res =>
          this.setState({ restaurants: res.data, name: "", zip: "", img: "" })
        )
        .catch(err => console.log(err));
    };

    deleteRestaurant = id => {
      API.deleteRestaurant(id)
        .then(res => this.loadRestaurants())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.name && this.state.zip) {
        API.saveRestaurant({
          name: this.state.name,
          category: this.state.category,
          city: this.state.city,
          zip: this.state.zip,
          img: this.state.img,
          waittime: this.state.waittime
        })
          .then(res => this.loadRestaurants())
          .catch(err => console.log(err));
      }
    };

    render() {
      return (
        <div>
        <Nav />
            <Container fluid>
              <Row>
                <Col size="md-6 lg-6" className='signupform'>
                  <div>
                    <h1>Restaurant Signup</h1>
                  </div>
                  <form>
                  Restaurant Name
                    <Input
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Required"
                    />
                    Category
                    <Input
                      value={this.state.category}
                      onChange={this.handleInputChange}
                      name="category"
                      placeholder="Required"
                    />
                    Zip
                    <Input
                      value={this.state.zip}
                      onChange={this.handleInputChange}
                      name="zip"
                      placeholder="Required"
                    />
                    Img URL
                    <Input
                    value={this.state.img}
                    onChange={this.handleInputChange}
                    name="img"
                    placeholder="Required"
                    />
                    <FormBtn
                      disabled={!(this.state.name && this.state.zip)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Name
                    </FormBtn>
                  </form>
                </Col>
              <Col size="md-6 lg-6" className="formpadding">
                  <div>
                    <h1>Near By Restaurants</h1>
                  </div>
                  {this.state.restaurants.length ? (
                    <List>
                      {this.state.restaurants.map(restaurant => (
                        <ListItem className="ListItem" key={restaurant._id}>
                          <Link to={"/Management/" + restaurant._id}>
                            <strong>
                              Log into {restaurant.name}
                              <DeleteBtn onClick={() => this.deleteRestaurant(restaurant._id)} />
                              <img alt="reignupimg" src= {restaurant.img} />
                            </strong>
                          </Link>
                        </ListItem>
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

  export default restaurantsignup;
