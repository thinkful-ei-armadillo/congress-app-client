import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

export default class Header extends Component {
	static contextType = UserContext;

	handleLogoutClick = () => {
		window.sessionStorage.clear();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
	};

	renderLogoutLink() {
		return (
			<div className="logged-in-header">
				Welcome, {this.context.user.username}
				{"  "}
				<Link to="/compare">
					<Button className="compare-button">Compare Members</Button>
				</Link>
				<Link onClick={this.handleLogoutClick} to="/" className="logout-button">
					<Button className="logout-button">Logout</Button>
				</Link>
			</div>
		);
	}

	renderLoginLink() {
		return (
			<div className="logged-out-header">
				<Link to="/compare">
					<Button className="compare-button">Compare Members</Button>
				</Link>{" "}
				<Link to="/login" className="login-button">
					<Button className="login-button">Login</Button>
				</Link>{" "}
				<Link to="/register" className="register-button">
					<Button className="register-button">Register</Button>
				</Link>
			</div>
		);
	}

	render() {
		return (
			<header>
				<h1 className="title">
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
