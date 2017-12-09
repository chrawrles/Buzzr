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
    persons: [],
    name: "",
    partysize: 0,
    personwait: "",
  };

    componentDidMount() {
      this.loadPersons();
    }

    loadPersons = () => {
      API.getPerson(this.props.match.params.id)
        .then(res =>
          this.setState({ persons: res.data})
        )
        .catch(err => console.log(err));
        this.loadRestaurants();
    };

    loadRestaurants() {
      API.loadRestaurant(this.props.match.params.id)
      .then(res => this.setState({ restaurant: res.data}))
      .catch(err => console.log(err));

    }
    deletePerson = id => {
      this.state.person.personwait=this.state.person.personwait - 5;
      API.updateRestaurant(this.props.match.params.id, {
        waittime: this.state.personwait
      })
      API.deletePerson(id)
        .then(res => this.loadPersons())
        .catch(err => console.log(err));
    };

    increaseTimer = id => {
      this.state.personwait=this.state.personwait += 5
      API.updatePerson (id, {
        personwait: this.state.personwait
      })
        .then(res => this.loadPersons())
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
        API.savePerson({
          name: this.state.title,
          phone: this.state.author,
          guest: this.state.synopsis
        })
          .then(res => this.loadPersons())
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
                {this.state.persons.length ? (

                  <List>
                    {this.state.persons.map(person => (
                      <ListItem key={person._id}>
                            <Row>
                            <Col size="md-1 xs-1">
                            {person.partysize}
                            </Col>
                            <Col size="md-9 xs-9">
                            {person.name}
                            </Col>
                            <Col size="md-1 xs-1">
                            {person.personwait}
                            </Col>
                            <Col size="md-1 xs-1">
                            <DeleteBtn onClick={() => this.deletePerson(person._id)} />
                            <DeleteBtn onClick={() => this.increaseTimer(person._id)} />
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
