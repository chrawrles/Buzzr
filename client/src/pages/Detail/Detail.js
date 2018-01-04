import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Detail.css";

class Detail extends Component {
  state = {
    persons: [],
    name: "",
    partysize: 0,
    restaurant: {},
    name: "",
    zip: "",
    img: "",
    waittime: "",
  };

  componentDidMount() {
    API.loadRestaurant(this.props.match.params.id)
      .then(res => this.setState({ restaurant: res.data }))
      .catch(err => console.log(err));
      this.loadPersons();
  }

  loadPersons = () => {
    API.getPersons()
      .then(res =>
        this.setState({ persons: res.data, name: "", partysize: "", phone: "", checkinto: "", personsrequest: ""})
      )
      .catch(err => console.log(err));

  };

  deletePerson = id => {
    API.deletePerson(id)
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
    if (this.state.name && this.state.phone && this.state.partysize) {
      this.state.restaurant.waittime=this.state.restaurant.waittime + 5;
      API.updateRestaurant(this.props.match.params.id, {
        waittime: this.state.restaurant.waittime

      })
        .then(res => {
          console.log(this.state.restaurant.waittime);
          API.savePerson({
            name: this.state.name,
            phone: this.state.phone,
            partysize: this.state.partysize,
            personsrequest: this.state.personsrequest,
            checkinto: this.state.restaurant.name,
            personswait: this.state.restaurant.waittime,
            id: this.props.match.params.id
          })
          this.props.history.push('/Trivia')})

        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="detail-wrapper">
        <Nav />
          <Container fluid>
          <Col size="md-6" className='checkindetails'>

          <img alt='res' className="checkinimg" src={this.state.restaurant.img} />
          </Col>
              <Col size="md-5" className='checkinform'>
                <div>
                <h2>Checking into  <br />{this.state.restaurant.name}</h2>
                </div>
                <form>
                Name
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder=""
                  />
                  Party Size
                  <Input
                    value={this.state.partysize}
                    onChange={this.handleInputChange}
                    name="partysize"
                    placeholder=""
                  />
                  Phone Number
                  <Input
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  name="phone"
                  placeholder=""
                  />
                  Special Request?
                  <Input
                  value={this.state.personsrequest}
                  onChange={this.handleInputChange}
                  name="personsrequest"
                  placeholder=""
                  />
                  <FormBtn
                    disabled={!(this.state.name && this.state.phone && this.state.partysize)}
                    onClick={this.handleFormSubmit}>
                    Check In
                  </FormBtn>
                </form>
              </Col>
          </Container>
        <Footer />
      </div>
    );
  }
}


export default Detail;
