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
        Welcome to MyCongress! You can access information on congress members' efficiency 
        with their bill sponsorship and vote frequency. Below you may search for congress 
        members by name or state. You can also compare two congress members either through
        compare link on the navigation bar or on the bottom of each member's page.
        You can easily find information on recently introduced or active bills on the floor.
        Additional information on committees are at the bottom of this page. The side bar,
        the leadership board lists the members based on missed votes.
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
