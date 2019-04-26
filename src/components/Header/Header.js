import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from '../Utils/Utils';
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import UserContext from '../../contexts/UserContext'
import "./Header.css";

export default class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    window.sessionStorage.clear();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    console.log(this.context);
    return (
      <div className="logged-in-header">
        Welcome, {this.context.user.username}{'  '}
        <Link to='/compare'>
          <Button id='compare-button'>Compare Members</Button>
        </Link>
        <Link onClick={this.handleLogoutClick} to="/" id="logout-button">
          <Button id='logout-button'>Logout</Button>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="logged-out-header">
        <Link to='/compare'>
          <Button id='compare-button'>Compare Members</Button>
        </Link>{' '}
        <Link to="/login" id="login-button">
        <Button id='login-button'>Login</Button>
        </Link>
        {' '}
        <Link to="/register" id="register-button">
          <Button id='register-button'>Register</Button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header>
        <h1 id="title">
          {TokenService.hasAuthToken() ? (
            <Link to="/dashboard">Congress.io</Link>
          ) : (
            <Link to="/">Congress.io</Link>
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
