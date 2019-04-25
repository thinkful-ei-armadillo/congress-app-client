import React, { Component } from "react";
import { Link } from "react-router-dom";

function CompareMemberListItem(props) {
	let { member } = props;
	return (
		<React.Fragment>
			<p onClick={props.setMemberToDisplay(member)}>
				{member.first_name} {member.last_name}, {member.title}
			</p>
		</React.Fragment>
	);
}

export default CompareMemberListItem;
