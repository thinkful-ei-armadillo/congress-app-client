import React from "react";
import MemberSearch from "../Member/MemberSearch";
import StateSearch from "../Member/StateSearch";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Following from "../Following/Following";
import CongressStatus from "../CongressStatus/CongressStatus";
import Committees from "../Committees/Committees";
import MissedVotesGraph from "../Data/MissedVotesGraph";
import LeaderBoardMobile from "../LeaderBoard/LeaderBoardMobile";
import TokenService from '../../services/token-service';
import "./Dashboard.css";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <section className="col1">
        <section className="members-status">
          <MemberSearch />
          <br />
          <br />
          <StateSearch />
          <br />
          <br />
          {TokenService.hasAuthToken() ? (
                <>
								  <Following />
                  <br />
                  <br />
                </>
							) : (
								' '
							)}
          
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
