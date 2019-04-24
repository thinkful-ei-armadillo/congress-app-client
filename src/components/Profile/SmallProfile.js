import React from "react";
import "./profile.css";

function SmallProfile(props) {
	return (
		<div>
			<img
				className="profile-picture"
				alt="Photo of Congressperson"
				src={`https://theunitedstates.io/images/congress/225x275/${
					props.member.id
				}.jpg`}
			/>
			<p className="title">{props.short_title}</p>
			<p className="name">
				{props.first_name.charAt(0)}
				{"."}
				{props.last_name}
				{props.suffix} ({props.party})
			</p>
			<section className="stats">
				<p className="missed_votes_pct">
					{" "}
					Missed Voting Opportunities %: {props.missed_votes_pct}
				</p>
			</section>
		</div>
	);
}

export default SmallProfile;
