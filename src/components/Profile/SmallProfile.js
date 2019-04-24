import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function SmallProfile(props) {
	console.log(props.member.first_name);
	let firstInitial = props.member.first_name.charAt(0);
	return (
		<div>
			<img
				className="profile-picture"
				alt="Photo of Congressperson"
				src={`https://theunitedstates.io/images/congress/225x275/${
					props.member.id
				}.jpg`}
			/>
			<p className="title">{props.member.short_title}</p>
			<p className="name">
				{firstInitial}
				{"."}
				{props.member.last_name}
				{props.member.suffix} ({props.member.party})
			</p>
			<section className="stats">
				<p className="missed_votes_pct">
					{" "}
					Missed Voting Opportunities %: {props.member.missed_votes_pct}
				</p>
			</section>
		</div>
	);
}

export default SmallProfile;
