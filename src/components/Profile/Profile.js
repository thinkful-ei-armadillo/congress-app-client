import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { Button } from "../Utils/Utils";
import ProfileMissedVotes from "../Data/ProfileMissedVotes";
import ProfilePartyVotes from "../Data/ProfilePartyVotes";
import UserContext from "../../contexts/UserContext";
import MemberApiService from "../../services/member-api-service";

function Profile(props) {
	const user = useContext(UserContext);
	// eslint-disable-next-line
	const [followedMembers, setFollowedMembers] = useState(null);
	const [isFollowing, setFollowing] = useState(false);

	const followMember = () => {
		MemberApiService.addFollowedMembers(props.member.id);
		setFollowing(true);
	};

	const unFollowMember = () => {
		MemberApiService.removeFollowedMembers(props.member.id);
		setFollowing(false);
	};

	useEffect(() => {
		if (user.user.id) {
			MemberApiService.getFollowedMembersId(user.user.id).then(data => {
				setFollowedMembers(data);
				data.forEach(e => {
					if (e.member_id === props.member.id) {
						setFollowing(true);
					}
				});
			});
		}
	}, [props.member.id, user.user.id]);

	const renderFollowButton = () => {
		if (isFollowing) {
			return (
				<Button className="add-member-following" onClick={unFollowMember}>
					Unfollow
				</Button>
			);
		} else {
			return (
				<Button className="add-member-following" onClick={followMember}>
					Follow
				</Button>
			);
		}
	};

	document.title = `MyCongress - ${props.member.short_title} ${props.member.first_name} ${props.member.last_name}`;
	return (
		<div className="main-profile">
			<img
				className="profile-picture"
				alt={props.member.first_name}
				onError={e => {
					e.target.onerror = null;
					e.target.src =
						"https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg";
				}}
				src={`https://theunitedstates.io/images/congress/225x275/${
					props.member.id
				}.jpg`}
			/>
			<h1 className="name" id='profile-page-name'>
				{props.member.short_title} {props.member.first_name}{" "}
				{props.member.middle_name} {props.member.last_name}
				{props.member.suffix} ({props.member.party})
			</h1>
			<p className="dob">Born: {props.member.date_of_birth}</p>
			<section className="member-social-media">
				{!props.member.twitter_account ? (
					""
				) : (
					<a
						className="twitter"
						href={`https://twitter.com/${props.member.twitter_account}`}
						aria-label='twitter link'
						>
						<i className="fab fa-twitter" />
					</a>
				)}
				{!props.member.youtube_account ? (
					""
				) : (
					<a
						className="youtube"
						href={`https://youtube.com/${props.member.youtube_account}`}
						aria-label='youtube link'
						>
						<i className="fab fa-youtube" />
					</a>
				)}
				{!props.member.facebook_account ? (
					""
				) : (
					<a
						className="facebook"
						href={`https://facebook.com/${props.member.facebook_account}`}
						aria-label='facebook link'
						>
						<i className="fab fa-facebook" />
					</a>
				)}
				<p className="phonenum">Phone: {props.member.phone}</p>
				{!props.member.fax ? (
					""
				) : (
					<p className="faxnum"> Fax: {props.member.fax}</p>
				)}
			</section>
			<section className="stats">
				<p className="seniority"> Years in Office: {props.member.seniority}</p>
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
					Missed Votes: {props.member.missed_votes}
				</p>
				<p className="missed_votes_pct">
					Proportion of Missed Voting Opportunities:{" "}
					{props.member.missed_votes_pct}%
				</p>
				<ProfileMissedVotes props={props.member.missed_votes_pct / 100} />
				<p className="votes_with_party_pct">
					Votes with Party: {props.member.votes_with_party_pct}%
				</p>
				<ProfilePartyVotes props={props.member.votes_with_party_pct / 100} />
			</section>
			<br />
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
			<br />
			<Link
				to={{
					pathname: "/compare",
					state: {
						member: props.member
					}
				}}>
				<Button className="profile-compare" id="compare-button-profile">
					Compare With Another Member
				</Button>
			</Link>
			{user.user.id && isFollowing !== null && renderFollowButton()}
		</div>
	);
}

export default Profile;
