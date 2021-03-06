import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../contexts/UserContext";
import "./LoginForm.css";

export default class LoginForm extends Component {
	static contextType = UserContext;
	static defaultProps = {
		onLoginSuccess: () => {}
	};

	state = { error: null };

	handleSubmitJwtAuth = ev => {
		ev.preventDefault();

		const { user_name, password } = ev.target;

		this.setState({ error: null });

		AuthApiService.postLogin({
			user_name: user_name.value,
			password: password.value
		})
			.then(res => {
				user_name.value = "";
				password.value = "";
				this.context.processLogin(res.authToken);
				this.props.onLoginSuccess();
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	render() {
		const { error } = this.state;
		return (
			<form
				className="LoginForm"
				onSubmit={this.handleSubmitJwtAuth}
				data-cy="login_form">
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="user_name">
					<label htmlFor="LoginForm__user_name">Username</label>
					<br />
					<Input
						required
						name="user_name"
						className="LoginForm__user_name"
						id="LoginForm__user_name"
						data-cy="user_name"
						aria-required="true"
					/>
				</div>
				<br />
				<div className="password">
					<label htmlFor="LoginForm__password">Password</label>
					<br />
					<Input
						required
						name="password"
						type="password"
						data-cy="password"
						id="LoginForm__password"
						aria-required="true"
					/>
				</div>
				<br />
				<Button type="submit" id="login-submit">
					Login
				</Button>
			</form>
		);
	}
}
