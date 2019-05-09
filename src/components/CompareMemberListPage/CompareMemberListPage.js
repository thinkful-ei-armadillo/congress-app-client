import React from "react";
import CompareMemberListItem from "./CompareMemberListItem";
import "./CompareMemberListPage.css";

function CompareMemberListPage(props) {
	if (props.members === null) {
		return <div className="no-search-feedback" />;
	} else if (props.members.length === 0) {
		return (
			<div id="no-results-feedback">
				No Results. Please Retry With a New Search.
			</div>
		);
	} else {
		return props.members.map(member => (
			<div className="search-results-container" data-cy="search-result">
				<div key={member.id} className="search-results">
					<CompareMemberListItem
						key={member.id}
						member={member}
						setDisplay={props.setDisplay}
					/>
				</div>
			</div>
		));
	}
}

export default CompareMemberListPage;
