import React from "react";
import MemberSearch from "../Member/MemberSearch";
import StateSearch from "../Member/StateSearch";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import CongressStatus from "../CongressStatus/CongressStatus";
import Committees from "../Committees/Committees";
import "./Dashboard.css";
import MissedVotesGraph from "../Data/MissedVotesGraph";
import LeaderBoardMobile from "../LeaderBoard/LeaderBoardMobile";

function Dashboard(props) {
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
          <MissedVotesGraph className="graph"/>
          <br />
          <br />
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

export default Dashboard;
