import React, { Component } from "react";
import MemberListItem from "./MemberListItem";
import "./MemberListPage.css";

export default class MemberListPage extends Component {
	renderMembers() {
		if (this.props.members === null) {
			return <p className="no-search-feedback" />;
		} else if (this.props.members.length === 0) {
			return (
				<p className="no-results-feedback">
					No Results. Please Retry With a New Search.
				</p>
			);
		} else {
			return this.props.members.map(member => (
				<p key={member.id} className="search-results">
					<MemberListItem key={member.id} member={member} />
				</p>
			));
		}
	}
	render() {
		return <section className="search-results-container" data-cy="search-result" aria-live='polite'>{this.renderMembers()}</section>;
	}
}
