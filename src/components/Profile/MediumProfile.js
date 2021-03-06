import React from "react";
import { Link } from "react-router-dom";
import "./MediumProfile.css";

function MediumProfile(props) {
	return (
		<div className="medium-profile">
			<div className="picture-container">
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
			</div>
			<div className="props-container">
				<p className="title">{props.short_title}</p>
				<Link
					to={`/profile/${props.member.id}`}
					className="name med-profile-name-link"
					data_cy="compare-name"
					title={`Click here to visit ${props.member.short_title} ${props.member.first_name} ${props.member.last_name}'s Profile Page`}>
					{props.member.short_title} {props.member.first_name}{" "}
					{props.member.middle_name}
					{props.member.last_name}
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
		</div>
	);
}

export default MediumProfile;
