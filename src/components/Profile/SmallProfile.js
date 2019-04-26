import React from "react";
// import { Link } from "react-router-dom";
import "./Profile.css";

function SmallProfile(props) {
	let firstInitial = props.member.first_name.charAt(0);
	return (
		<div>
			<img
				className="profile-picture"
				alt={props.member.alt}
				onError={e => {
					e.target.onerror = null;
					e.target.src =
						"https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg";
				}}
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
