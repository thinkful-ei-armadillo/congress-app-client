import React, { useState, useEffect } from "react";
import SmallProfile from "../Profile/SmallProfile";
import MemberApiService from "../../services/member-api-service";
import "./LeaderBoard.css";

export default function LeaderBoard(props) {
	let [top3, setTop3] = useState(null);
	useEffect(() => {
		// query members by one prop, show them sorted DESC
		MemberApiService.getTop3s().then(res => setTop3(res));
	}, []);
	return top3 ? (
		<div className="LeaderBoard">
			<p>
				<b>Highest Missed Votes %</b>
			</p>
			{top3.map((member, index) => {
				return (
					<div key={member.id} className="MemberContainer">
						<h4 className="rank">#{index + 1}</h4>
						<SmallProfile member={member} className="" />
					</div>
				);
			})}
		</div>
	) : (
		""
	);
}
