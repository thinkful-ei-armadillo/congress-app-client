import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

export default class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="logged-in-header">
        {"  "}
        <Link to="/compare" className="compare-button-link">
          Compare Members
        </Link>
        <Link onClick={this.handleLogoutClick} to="/" className="logout-button">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="logged-out-header">
        <Link className="compare-button-link" to="/compare">
          Compare Members
        </Link>{" "}
        <Link to="/login" className="login-button">
          Login
        </Link>{" "}
        <Link to="/register" className="register-button">
          Register
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header>
        <div className="title-container">
          <div className="logo-container">
            <img
              src="https://i.ibb.co/LY5d7h2/logo.png"
              alt="mycongress logo"
              id="logo"
              border="0"
            />
          </div>
          <h1 className="title">
            <Link to="/dashboard">
              <span className="little">My</span>
              Congress
            </Link>
          </h1>
        </div>
        <nav>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </header>
    );
  }
}
