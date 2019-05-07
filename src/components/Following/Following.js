import React, { useEffect, useState, useContext } from "react";
import MemberApiService from "../../services/member-api-service";
import MediumProfile from "../Profile/MediumProfile";
import UserContext from "../../contexts/UserContext";
import "./Following.css";

export default function Following(props) {
	const [members, setMembers] = useState([]);
	const user = useContext(UserContext);

	useEffect(() => {
		MemberApiService.getFollowedMembers(user.user.id).then(
			followedMembers => {
				setMembers(followedMembers);
			}
		);
	}, [user.user.id]);

	const renderFollowedMembers = () => {
		return members.map(member => {
			return (
				<li className="followed-member" key={member.id}>
					<MediumProfile member={member} />
				</li>
			);
		});
	};
	return (
		<div className="following-wrapper">
			{members.length > 0 ? (
				<div>
					<p>
						<b>Congress Members I am following: </b>
					</p>
					<ul className="following-list">{renderFollowedMembers()}</ul>
				</div>
			) : (
				<div>
					<p>
						<b>Not following anyone yet</b>
					</p>
				</div>
			)}
		</div>
	);
}
