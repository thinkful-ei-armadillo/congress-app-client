import React, { Component } from "react";

import MemberApiService from "../services/member-api-service";
import Profile from "../components/Profile/Profile";

export default class ProfileRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null
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
        <Profile member={this.state.member} props={this.props}/>
      </section>
    );
  }
}
