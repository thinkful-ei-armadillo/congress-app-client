import React from "react";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";
import { Button } from "../Utils/Utils";
import "./Profile.css";

function Profile(props) {
	return (
		<div className="main-profile">
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
					<section className="twitter-links">
						<a
							className="twitter"
							href={`https://twitter.com/${props.member.twitter_account}`}>
							<i className="fab fa-twitter" />
						</a>
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName={`${props.member.twitter_account}`}
							options={{ height: 400 }}
						/>
					</section>
				)}
				{!props.member.youtube_account ? (
					""
				) : (
					<section className="youtube-links">
						<a
							className="youtube"
							href={`https://youtube.com/${props.member.youtube_account}`}>
							<i className="fab fa-youtube" />
						</a>
						{/* <script src="https://apis.google.com/js/platform.js" />
						<div
							class="g-ytsubscribe"
							data-channel={`${props.member.youtube_account}`}
							data-layout="full"
							data-count="hidden"
						/> */}
					</section>
				)}
				{!props.member.facebook_account ? (
					""
				) : (
					<a
						className="facebook"
						href={`https://facebook.com/${props.member.facebook_account}`}>
						<i className="fab fa-facebook" />
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
			<section className="committee_chair">
				{!props.member.committee_id ? (
					""
				) : (
					<div>
						<p>
							Chair of: The{" "}
							<a href={`${props.member.committee_url}`} target="blank">
								{props.member.committee_name}
							</a>
						</p>
					</div>
				)}
			</section>
			<Link
				to={{
					pathname: "/compare",
					state: {
						member: props.member
					}
				}}>
				<Button className="profile-compare" id="compare-button">
					Compare With Another Member
				</Button>
			</Link>
		</div>
	);
}

export default Profile;
