import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import TwitterLogo from "../../assets/Twitter_Social_Icon_Circle_White.png";
import FacebookLogo from "../../assets/flogo-HexRBG-Wht-58.png";
import YoutubeLogo from "../../assets/youtube_social_icon_dark.png";

function Profile(props) {
	// let { handle } = props.member;
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
			<p className="name">
				{props.member.short_title} {props.member.first_name}{" "}
				{props.member.middle_name} {props.member.last_name}
				{props.member.suffix} ({props.member.party})
			</p>
			<p className="dob">Born: {props.member.date_of_birth}</p>
			<section className="member-social-media">
				{!props.member.twitter_account ? (
					""
				) : (
					<a
						className="twitter"
						href={`https://twitter.com/${props.member.twitter_account}`}>
						<img src={TwitterLogo} alt="twitter-logo" />
					</a>
				)}
				{!props.member.youtube_account ? (
					""
				) : (
					<a
						className="youtube"
						href={`https://youtube.com/${props.member.youtube_account}`}>
						<img src={YoutubeLogo} alt="youtube-logo" />
					</a>
				)}
				{!props.member.facebook_account ? (
					""
				) : (
					<a
						className="facebook"
						href={`https://facebook.com/${props.member.facebook_account}`}>
						<img src={FacebookLogo} alt="facebook-logo" />
					</a>
				)}
				<p className="phonenum">{props.member.phone}</p>
				<p className="faxnum">{props.member.fax}</p>
			</section>
			<section className="stats">
				<p className="seniority"> Years in Senate: {props.member.seniority}</p>
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
			<Link
				to={{
					pathname: "/compare",
					state: {
						member: props.member
					}
				}}>
				<button>Compare with another Member</button>
			</Link>
		</div>
	);
}

export default Profile;
