import React, { Component } from "react";
import Profile from "../components/Profile/Profile";
import MemberApiService from "../services/member-api-service";
import SmallProfile from "../components/Profile/SmallProfile";

export default class ProfileRoute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			member: {}
		};
	}
	componentDidMount() {
		// potentially pass down member id or name here from the link sending us to this page?
		MemberApiService.getMember(`------`).then(member =>
			this.setState({ member })
		);
	}
	render() {
		return this.state.member ? (
			"Now Loading..."
		) : (
			<section className="member-profile-container">
				<Profile member={this.state.member} />
				<SmallProfile member={this.state.member} />
			</section>
		);
	}
}
