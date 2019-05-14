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
      <section className="col1">
        Welcome to MyCongress! Below you may search for congress members by name
        or state that you may also compare. You may also see information on
        recently introduced or active bills on the floor. Additionally there is
        information on committees and a leadership board based on missed votes.
        <section className="members-status">
          <MemberSearch />
          <br />
          <br />
          <StateSearch />
          <br />
          <br />
          <MissedVotesGraph className="graph" />
          <br />
          <br />
        </section>
        <LeaderBoardMobile />
        <br />
        <br />
        <CongressStatus />
        <br />
        <br />
        <Committees />
        <br />
        <br />
      </section>
      <section className="col2">
        <LeaderBoard />
        <br />
        <br />
      </section>
    </div>
  );
}

export default Dashboard;
