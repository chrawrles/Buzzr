import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './SignupForm.css'
import Nav from '../Nav'
import Footer from '../Footer'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    redirectTo: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // TODO - validate your input!

    const {
      username,
      password
    } = this.state

    axios
    .post('/auth/signup', { username, password })
    .then(response => {
      console.log(response)
      if (!response.data.error) {
        console.log('youre good')
        this.setState({
          redirectTo: '/restaurantsignup'
        })
      } else {
        console.log(response.data.error)
      }
    })
  }

  render() {
    const {
      username,
      password,
      confirmPassword,
      redirectTo
    } = this.state

    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo }} />
    }

    return (
      <div>
      <Nav />
          <h1>Sign Up With Buzzr! </h1>
          <div className="container-fluid">
            <div className="username">
              <label htmlFor="username">User Name:</label>
                <input
                  type="text"
                  name="username" placeholder ="Please enter an ID"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
            <div className="password">
              <label htmlFor="password"><i className="glyphicon glyphicon-lock"></i></label>
                <input
                  type="password"
                  name="password" placeholder= "Password"
                  value={password}
                  onChange={this.handleChange}
                  />
              </div>
            <div className="confirm">

                <input
                  type="password"
                  name="confirmPassword" placeholder= "Confirm Password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  />
                </div>
            <div className="separate">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
            </div>
              </div>
              <Footer />
            </div>
    )
  }
}

export default SignupForm
