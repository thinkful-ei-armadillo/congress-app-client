import React, { Component } from "react";
import MemberApiService from "../../services/member-api-service";
import { Link } from "react-router-dom";
import CompareMemberListItem from "./CompareMemberListItem";

function CompareMemberListPage(props) {
	if (props.members === null) {
		return <div>Please Search for Members</div>;
	} else {
		return props.members.map(member => (
			<div key={member.id}>
				<CompareMemberListItem
					key={member.id}
					member={member}
					setDisplay={props.setDisplay}
				/>
			</div>
		));
	}
}

export default CompareMemberListPage;
