import React from "react";
import MemberSearch from "../Member/MemberSearch";
import StateSearch from "../Member/StateSearch";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import CongressStatus from "../CongressStatus/CongressStatus";
import "./Dashboard.css";
import MissedVotesGraph from "../Data/Data";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="col1">
        <MemberSearch />
        <br />
        <br />
        <StateSearch />
        <br />
        <br />
        <MissedVotesGraph />
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

export default Dashboard;
