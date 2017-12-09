import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";



class Restaurants extends Component {
  state = {
    restaurants: [],
    name: "",
    address: "",
    waittime: ""
  };

  componentDidMount() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res =>
        this.setState({ restaurants: res.data, name: "", address: "", waittime: "" })
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
    if (this.state.name && this.state.address) {
      API.saveRestaurant({
        name: this.state.title,
        address: this.state.author,
        waittime: this.state.synopsis
      })
        .then(res => this.loadRestaurants())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
          <Container fluid>
            <Row>
              <Col size="md-4">
                <div>
                  <h1>Nearby Restaurants</h1>
                </div>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <ListItem key={restaurant._id}>
                        <Link to={"/restaurants/" + restaurant._id}>
                          <strong>
                            {restaurant.name} for {restaurant.address}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteRestaurant(restaurant._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Restaurants;
