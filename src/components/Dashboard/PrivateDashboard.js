import React from "react";
import MemberSearch from "../Member/MemberSearch";
import StateSearch from "../Member/StateSearch";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Following from "../Following/Following";
import CongressStatus from '../CongressStatus/CongressStatus';
import "./Dashboard.css";

function PrivateDashboard(props) {
	return (
		<div className="dashboard">
			<div className="col1">
				<MemberSearch />
				<br />
				<br />
				<StateSearch />
				<br />
				<br />
				<Following />
				<br />
				<br />
				<CongressStatus />
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
