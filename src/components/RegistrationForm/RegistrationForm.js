import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
	state = { error: null };

	handleSubmit = ev => {
		ev.preventDefault();
		const { full_name, nick_name, user_name, password } = ev.target;

		this.setState({ error: null });
		AuthApiService.postUser({
			user_name: user_name.value,
			password: password.value,
			full_name: full_name.value
		})
			.then(user => {
				full_name.value = "";
				nick_name.value = "";
				user_name.value = "";
				password.value = "";
				this.props.onRegistrationSuccess(user);
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};
	render() {
		const { error } = this.state;
		return (
			<form
				className="RegistrationForm"
				onSubmit={this.handleSubmit}
				data-cy="registration_form">
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="full_name">
					<label htmlFor="RegistrationForm__full_name">
						Full name <Required />
					</label>
					<br />
					<Input
						name="full_name"
						type="text"
						required
						id="RegistrationForm__full_name"
						data-cy="full_name"
						aria-required="true"
					/>
				</div>
				<div className="user_name">
					<label htmlFor="RegistrationForm__user_name">
						User name <Required />
					</label>
					<br />
					<Input
						name="user_name"
						type="text"
						required
						id="RegistrationForm__user_name"
						data-cy="user_name"
						aria-required="true"
					/>
				</div>
				<div className="password">
					<label htmlFor="RegistrationForm__password">
						Password <Required />
					</label>
					<br />
					<Input
						name="password"
						type="password"
						required
						id="RegistrationForm__password"
						data-cy="password"
						aria-required="true"
					/><br />
					Minimum <b>8</b> characters long.<br />
					Include at least one <b>uppercase</b> character, one <b>lowercase</b> character,<br /> one <b>number</b>, and one <b>symbol</b>.
				</div>
				<br />
				<Button type="submit" id="register-submit">
					Register
				</Button>
			</form>
		);
	}
}
