import React from "react";
import MemberSearch from "../Member/MemberSearch";
import StateSearch from "../Member/StateSearch";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Following from "../Following/Following";
import CongressStatus from '../CongressStatus/CongressStatus';
import MissedVotesGraph from "../Data/MissedVotesGraph";
import Committees from "../Committees/Committees";
import "./Dashboard.css";
import LeaderBoardMobile from "../LeaderBoard/LeaderBoardMobile";

function PrivateDashboard(props) {
	document.title = 'MyCongress - Dashboard';
	return (
		<div className="dashboard">
			<div className="col1">
				<div className="members-status">
					<MemberSearch />
					<br />
					<br />
					<StateSearch />
					<br />
					<br />
					<Following />
					<br />
					<br />
					<MissedVotesGraph />
				</div>
				<LeaderBoardMobile />
				<br />
				<br />
				<CongressStatus />
				<br />
				<br />
				<Committees />
				<br />
				<br />
			</div>
			<div className="col2">
				<LeaderBoard />
				<br />
				<br />
			</div>
		</div>
	);
}

export default PrivateDashboard;
