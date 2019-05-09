import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
// import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2 id="login-header">Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        /><br/>
        <h3>For testing, you may use this demo user:</h3>
        <p>u: demo123 <br/> pw: Demo123!</p>
      </Section>
    )
  }
}
