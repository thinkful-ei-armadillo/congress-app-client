import React from "react";
import "./CompareMemberListItem.css";

function CompareMemberListItem(props) {
	let { member } = props;
	const clickMember = e => {
		e.preventDefault();
		props.setDisplay(member);
	};
	return (
			<button
				className="compare-member-list-item"
				onClick={e => clickMember(e)}>
				<p>
					{member.first_name} {member.last_name}, {member.title}
				</p>
			</button>
	);
}

export default CompareMemberListItem;
