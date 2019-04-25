import React from "react";

function CompareMemberListItem(props) {
	let { member } = props;
	return (
		<p onClick={() => props.setDisplay(member)}>
			{member.first_name} {member.last_name}, {member.title}
		</p>
	);
}

export default CompareMemberListItem;
