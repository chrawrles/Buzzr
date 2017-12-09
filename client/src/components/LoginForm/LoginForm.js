import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {
      username,
      password
    } = this.state

    console.log('handleSubmit')

    this.props._login(username, password)
    this.setState({
      redirectTo: '/management'
    })
  }

  render() {
    const {
      redirectTo,
      username,
      password
    } = this.state

    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo }} />
    } else {
      return (
        <div className="LoginForm">
          <h1>Login form</h1>
          <form>
            <label htmlFor="username">User: </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      )
    }
  }
}

export default LoginForm
