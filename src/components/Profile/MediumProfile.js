import React from "react";
import { Link } from "react-router-dom";
import "./MediumProfile.css";

function MediumProfile(props) {
	return (
		<div className="medium-profile">
			<img
				className="medium-profile-picture"
				alt={`${props.member.first_name} ${props.member.last_name}`}
				onError={e => {
					e.target.onerror = null;
					e.target.src =
						"https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg";
				}}
				src={`https://theunitedstates.io/images/congress/225x275/${
					props.member.id
				}.jpg`}
			/>
			<p className="title">{props.short_title}</p>
			<Link to={`/profile/${props.member.id}`} className="name">
				{props.member.short_title} {props.member.first_name}{" "}
				{props.member.middle_name} {props.member.last_name}
				{props.member.suffix} ({props.member.party})
			</Link>
			<section className="member-social-media">
				<p className="phonenum">Phone: {props.member.phone}</p>
			</section>
			<section className="stats">
				<p className="missed_votes_pct">
					{" "}
					Missed Votes: {props.member.missed_votes_pct}%
				</p>
				<p className="votes_with_party_pct">
					{" "}
					Votes with Party: {props.member.votes_with_party_pct}%
				</p>
			</section>
		</div>
	);
}

export default MediumProfile;
