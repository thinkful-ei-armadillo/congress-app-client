import React from "react";
import { Link } from "react-router-dom";
import MemberSearch from "../Member/MemberSearch";
import StateSearch from "../Member/StateSearch";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

function Dashboard(props) {
	return (
		<div>
			{/* member search will render results component on top of dashboard? */}
			<MemberSearch />
			{/* State search component modifies its contents based on dropdown selection */}
			{/* and will show MediumProfiles on the state's representatives */}
			{/* will need to show many representatives */}
			{/* or add district filter for representative display (don't display any members until user has filled both state and district dropdowns?) */}
			<StateSearch />
			{/* leaderboard shows sets of 3, at first 1 list */}
			{/* 3 SmallProfiles showing stat related to leaderboard */}
			{/* show more than one leaderboard in the future */}
			<LeaderBoard />
			<div>
				<p>What's happening on the floor?</p>
			</div>
		</div>
	);
}

export default Dashboard;
