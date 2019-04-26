import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Link to='/compare'>Compare Members</Link>
        <Link onClick={this.handleLogoutClick} to="/" id="logout-button">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="logged-out-header">
        <Link to='/compare'>Compare Members</Link>
        <Link to="/login" id="login-button">
          Log In
        </Link>
        {"  "}
        <Link to="/register" id="register-button">
          Register
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
