import React, { Component } from "react";
// import MemberApiService from '../../services/member-api-service';
// import { Link } from 'react-router-dom';
import MemberListItem from "./MemberListItem";
import "./MemberListPage.css";

export default class MemberListPage extends Component {
	renderMembers() {
		if (this.props.members === null) {
			return <div className="no-search-feedback" />;
		} else if (this.props.members.length === 0) {
			return (
				<div className="no-results-feedback">
					No Results. Please Retry With a New Search.
				</div>
			);
		} else {
			return this.props.members.map(member => (
				<div key={member.id} className="search-results">
					<MemberListItem key={member.id} member={member} />
				</div>
			));
		}
	}
	render() {
		return <div className="search-results-container" data-cy="search-result">{this.renderMembers()}</div>;
	}
}
