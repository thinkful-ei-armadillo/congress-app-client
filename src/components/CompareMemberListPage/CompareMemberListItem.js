import React from "react";

function CompareMemberListItem(props) {
	let { member } = props;
	return (
		<a href='#'>
		<p onClick={() => props.setDisplay(member)}>
			{member.first_name} {member.last_name}, {member.title}
		</p>
		</ a>
	);
}

export default CompareMemberListItem;
