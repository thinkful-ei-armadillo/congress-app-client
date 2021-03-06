import React, { useState, useEffect } from "react";
import SmallProfile from "../Profile/SmallProfile";
import MemberApiService from "../../services/member-api-service";
import "./LeaderBoard.css";

export default function LeaderBoard(props) {
	let [top3, setTop3] = useState(null);
	useEffect(() => {
		MemberApiService.getTop3s().then(res => setTop3(res));
	}, []);
	return top3 ? (
		<div className="LeaderBoard">
			<p className="LeaderBoard-title">
				<b>Leaders in Missed Votes</b>
			</p>
			{top3.map((member, index) => {
				return (
					<div key={member.id} className="MemberContainer">
						<h4 className="rank">#{index + 1}</h4>
						<SmallProfile member={member} className="leaderboard-small-profile" />
					</div>
				);
			})}
		</div>
	) : (
		""
	);
}
