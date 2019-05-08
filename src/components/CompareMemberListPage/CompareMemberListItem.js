import React from "react";

function CompareMemberListItem(props) {
	let { member } = props;
	const clickMember = e => {
		e.preventDefault();
		props.setDisplay(member);
	};
	return (
		<button className="compare-member-list-item" onClick={e => clickMember(e)}>
			<p>
				{member.short_title}{' '} {member.first_name} {member.last_name}
			</p>
		</button>
	);
}

export default CompareMemberListItem;
