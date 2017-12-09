import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./CusSignIn.css";


class CusSignIn extends Component {
    state = {
      users: [],
      name: "",
      partysize: "",
      phone: "",
      request: ""
    };

    componentDidMount() {
      API.getRestaurant(this.props.match.params.id)
        .then(res => this.setState({ restaurant: res.data }))
        .catch(err => console.log(err));
    }


    deleteUser = id => {
      API.deleteUser(id)
        .then(res => this.loadUsers())
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
      if (this.state.name && this.state.phone && this.state.partysize) {
        API.saveUser({
          name: this.state.name,
          phone: this.state.phone,
          partysize: this.state.partysize,
          checkinto: this.state.checkinto,


        })
          .then(res => this.loadUsers())
          .catch(err => console.log(err));
      }
    };

    render() {
      console.log(this.state)
      return (
        <div>
          <Nav />
            <Container fluid>
              <Row>
                <Col size="md-4">
                  <div>
                    <h1>Please Check In</h1>
                  </div>

                  <form>
                    <Input
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Name (required)"
                    />
                    <Input
                      value={this.state.partysize}
                      onChange={this.handleInputChange}
                      name="partysize"
                      placeholder="How many people are in your party? (required)"
                    />
                    <Input
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    name="phone"
                    placeholder="Phone Number(required)"
                    />
                    <Input
                    value={this.state.request}
                    onChange={this.handleInputChange}
                    name="request"
                    placeholder="Birthday, Highchair, etc"
                    />
                    <Input
                    value={this.state.checkinto}
                    onChange={this.handleInputChange}
                    name="checkinto"
                    placeholder={this.state.restaurant.name}
                    />
                    <FormBtn
                      disabled={!(this.state.name && this.state.phone && this.state.partysize)}
                      onClick={this.handleFormSubmit}
                    >
                      Check In
                    </FormBtn>
                  </form>
                </Col>
                {/*<Col size="md-4">
                // For testing
                  <div>
                    <h1>Waiting List</h1>
                  </div>
                  {this.state.users.length ? (
                    <List>
                      {this.state.users.map(user => (
                        <ListItem key={user._id}>
                          <Link to={"/users/" + user._id}>
                              Name: {user.name} <br/>
                              Party Size: {user.partysize} <br/>
                              Phone: {user.phone}<br/>
                              Checked Into: {user.checkinto}
                          </Link>
                          <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Col>*/}

              </Row>
            </Container>
          <Footer />
        </div>
      );
    }
  }

  export default CusSignIn;
