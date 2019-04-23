import React from 'react';
import { Link } from 'react-router-dom';
import MemberSearch from '../Member/MemberSearch';
import StateSearch from '../Member/StateSearch';
import LeaderBoard from '../LeaderBoard/LeaderBoard';

function Dashboard(props) {
  return (
    <div>
      <MemberSearch />
      <StateSearch />
      <LeaderBoard />
      <div>
        <p>What's happening on the floor?</p>
      </div>
    </div>
  );
}

export default Dashboard;
