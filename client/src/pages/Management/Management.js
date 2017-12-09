import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Footer from "../../components/Footer";
import "./Management.css";
import Nav from "../../components/Nav";


class Management extends Component {
  state = {
    users: [],
    name: "",
    partysize: 0,
    userwait: "",
  };

    componentDidMount() {
      this.loadUsers();
    }

    loadUsers = () => {
      API.getUser(this.props.match.params.id)
        .then(res =>
          this.setState({ users: res.data})
        )
        .catch(err => console.log(err));
        this.loadRestaurants();
    };

    loadRestaurants() {
      API.loadRestaurant(this.props.match.params.id)
      .then(res => this.setState({ restaurant: res.data}))
      .catch(err => console.log(err));

    }
    deleteUser = id => {
      this.state.user.userwait=this.state.user.userwait - 5;
      API.updateRestaurant(this.props.match.params.id, {
        waittime: this.state.userwait
      })
      API.deleteUser(id)
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    };

    increaseTimer = id => {
      this.state.userwait=this.state.userwait += 5
      API.updateUser (id, {
        userwait: this.state.userwait
      })
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
      if (this.state.name && this.state.phone) {
        API.saveUser({
          name: this.state.title,
          phone: this.state.author,
          guest: this.state.synopsis
        })
          .then(res => this.loadUsers())
          .catch(err => console.log(err));
      }
    };

    render() {
      return (
        <div>
        <Nav />
            <Container fluid>
              <Row>
              <Col size="md-12" className='waitlistspacing'>
                <div>
                  <h3>Wait List</h3>
                </div>
                <Row>
                <Col size="md-2 xs-2"># of Guest</Col>
                <Col size="md-8 xs-6">Name</Col>
                <Col size="md-1 xs-1">Wait Time</Col>
                <Col size="md-1 xs-1"></Col>
                </Row>
                {this.state.users.length ? (

                  <List>
                    {this.state.users.map(user => (
                      <ListItem key={user._id}>
                            <Row>
                            <Col size="md-1 xs-1">
                            {user.partysize}
                            </Col>
                            <Col size="md-9 xs-9">
                            {user.name}
                            </Col>
                            <Col size="md-1 xs-1">
                            {user.userwait}
                            </Col>
                            <Col size="md-1 xs-1">
                            <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                            <DeleteBtn onClick={() => this.increaseTimer(user._id)} />
                            </Col>
                            </Row>
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

  export default Management;
