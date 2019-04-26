import React, { useState, useEffect } from "react";
import SmallProfile from "../Profile/SmallProfile";
import MemberApiService from "../../services/member-api-service";

export default function LeaderBoard(props) {
	let [top3, setTop3] = useState(null);
	useEffect(() => {
		// query members by one prop, show them sorted DESC
		MemberApiService.getTop3s().then(res => setTop3(res));
	}, []);
	return top3 ? (
		<div className="LeaderBoard">
			<p>We are the leaders, getting our job done!</p>
			<p>Highest Missed Votes % Among All Members</p>
			{top3.map((member, index) => {
				return (
					<div key={member.id}>
						<span className="rank">#{index + 1}</span>
						<SmallProfile member={member} />
					</div>
				);
			})}
		</div>
	) : (
		""
	);
}
