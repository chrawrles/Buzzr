import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './Register.css'
import SignupForm from '../../components/SignupForm';
import LoginForm from '../../components/LoginForm';
import Dash from '../../components/Dash'
import Header from '../../components/Header'

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/management" className="nav-link">
              Management
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props._logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/management" className="nav-link">
              Management
            </Link>
            <li className="nav-item">
            <Link to="/login" className="nav-link">
              login
            </Link>
          </li>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              sign up
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

class Register extends Component {
  state = {
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _logout = (event) => {
    event.preventDefault()
    console.log('logging out')

    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _login = (username, password) => {
    axios
    .post('/auth/login', {
      username,
      password
    })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      }
    })
  }

  render() {
    const {
      loggedIn,
      user
    } = this.state

    return (
      <div className="Register">
        <h1>Options!</h1>
        <Header user={user} />
        {/* LINKS to our different 'pages' */}
        <DisplayLinks _logout={this._logout} loggedIn={loggedIn} />
        {/*  ROUTES */}
        <Route exact path="/" render={() => <Dash user={user} />} />
        <Route
          exact
          path="/login"
          render={() =>
            <LoginForm
              _login={this._login}
            />}
        />
        <Route exact path="/signup" component={SignupForm} />
      </div>
    )
  }
}

export default Register
