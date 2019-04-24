import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
	if (props.member.first_name) {
		console.log(props.member.first_name);
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
					{props.member.first_name}
					{props.member.middle_name}
					{props.member.last_name}
					{props.member.suffix} ({props.member.party})
				</p>
				<p className="dob">Born: {props.member.date_of_birth}</p>
				<section className="member-social-media">
					{/* maybe these should be icons, or just social media widgets or something */}
					<a
						className="twitter"
						src={`https://twitter.com/${props.member.twitter_account}`}
					/>
					<a
						className="youtube"
						src={`https://youtube.com/${props.member.youtube_account}`}
					/>
					<a
						className="facebook"
						src={`https://facebook.com/${props.member.facebook_account}`}
					/>
					<p className="phonenum">{props.member.phone}</p>
					<p className="faxnum">{props.member.fax}</p>
				</section>
				<section className="stats">
					<p className="seniority">
						{" "}
						Years in Senate: {props.member.seniority}
					</p>
					<p className="next_election">
						{" "}
						Next Election: {props.member.next_election}
					</p>
					<p className="total_votes">
						{" "}
						Total Votes Cast: {props.member.total_votes}
					</p>
					<p className="missed_votes">
						{" "}
						Missed Voting Opportunities:{props.member.missed_votes}
					</p>
					<p className="missed_votes_pct">
						{" "}
						Missed Voting Opportunities %: {props.member.missed_votes_pct}
					</p>
					<p className="votes_with_party_pct">
						{" "}
						Votes with Party %: {props.member.votes_with_party_pct}
					</p>
				</section>
			</div>
		);
	} else {
		return "";
	}
}

export default Profile;
