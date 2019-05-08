import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

export default class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    // console.log(this.context.user.username);
    return (
      <div className="logged-in-header">
        {/* <p>Welcome, {this.context.user.username}</p> */}
        {'  '}
        <Link to="/compare">
          <Button id="compare-button">Compare Members</Button>
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          <Button id="logout-button">Logout</Button>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="logged-out-header">
        <Link to="/compare">
          <Button id="compare-button">Compare Members</Button>
        </Link>{' '}
        <Link to="/login" className="login-button">
          <Button id="login-button">Login</Button>
        </Link>{' '}
        <Link to="/register" className="register-button">
          <Button id="register-button">Register</Button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header>
        <h1 className="title">
          {TokenService.hasAuthToken() ? (
            <Link to="/dashboard">
              <span className="little">My</span>Congress
              <span className="little">.io</span>
            </Link>
          ) : (
            <Link to="/">
              <span className="little">My</span>Congress
              <span className="little">.io</span>
            </Link>
          )}
        </h1>
        <nav>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </header>
    );
  }
}
