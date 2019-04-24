import React from "react";
import "./profile.css";

function MediumProfile(props) {
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
				{props.first_name}
				{props.middle_name}
				{props.last_name}
				{props.suffix} ({props.party})
			</p>
			<section className="member-social-media">
				<p className="phonenum">{props.phone}</p>
				<p className="faxnum">{props.fax}</p>
			</section>
			<section className="stats">
				<p className="missed_votes_pct">
					{" "}
					Missed Voting Opportunities %: {props.missed_votes_pct}
				</p>
				<p className="votes_with_party_pct">
					{" "}
					Votes with Party %: {props.votes_with_party_pct}
				</p>
			</section>
		</div>
	);
}

export default MediumProfile;
