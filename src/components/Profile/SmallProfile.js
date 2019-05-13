import React from "react";
import { Link } from "react-router-dom";
import "./SmallProfile.css";

function SmallProfile(props) {
	let firstInitial = props.member.first_name.charAt(0);
	return (
		<div className="small-profile">
			<img
				className="small-profile-picture"
				alt="member small profile"
				onError={e => {
					e.target.onerror = null;
					e.target.src =
						"https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg";
				}}
				src={`https://theunitedstates.io/images/congress/225x275/${
					props.member.id
				}.jpg`}
			/>
			<Link
				to={`/profile/${props.member.id}`}
				className="name"
				title={`Click here to visit ${props.member.short_title} ${
					props.member.first_name
				} ${props.member.last_name}'s Profile Page`}>
				<p className="name">
					{props.member.short_title} {firstInitial}
					{". "}
					{props.member.last_name}
					{props.member.suffix} ({props.member.party})
				</p>
			</Link>
			<section className="stats">
				<p className="missed_votes_pct">
					Missed: {props.member.missed_votes_pct}%
				</p>
			</section>
		</div>
	);
}

export default SmallProfile;
