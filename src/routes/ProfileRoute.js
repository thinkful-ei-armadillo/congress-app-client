import React, { Component } from "react";

import MemberApiService from "../services/member-api-service";
import Profile from "../components/Profile/Profile";
import MediumProfile from "../components/Profile/MediumProfile";
import SmallProfile from "../components/Profile/SmallProfile";

export default class ProfileRoute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			member: {}
		};
	}
	componentDidMount() {
		let memberID = this.props.match.params.id;
		MemberApiService.getMemberbyID(memberID).then(member =>
			this.setState({ member })
		);
	}
	render() {
		return !this.state.member ? (
			"Now Loading..."
		) : (
			<section className="member-profile-container">
				<Profile member={this.state.member} />
				<MediumProfile member={this.state.member} />
				{/* <SmallProfile member={this.state.member} /> */}
			</section>
		);
	}
}
