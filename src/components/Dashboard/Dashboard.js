import React from 'react';
import { Link } from 'react-router-dom';
import MemberSearch from '../Member/MemberSearch';
import StateSearch from '../Member/StateSearch';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import CongressStatus from '../CongressStatus/CongressStatus';

function Dashboard(props) {
  return (
    <div>
      <MemberSearch />
      <StateSearch />
      <LeaderBoard />
      <CongressStatus />
    </div>
  );
}

export default Dashboard;
