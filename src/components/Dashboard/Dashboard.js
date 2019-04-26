import React from 'react';
import MemberSearch from '../Member/MemberSearch';
import StateSearch from '../Member/StateSearch';
import Leaderboard from '../LeaderBoard/LeaderBoard';
import CongressStatus from '../CongressStatus/CongressStatus';
import './Dashboard.css';

function Dashboard(props) {
  return (
    <div className='dashboard'>
      {/* member search will render results component on top of dashboard? */}
      <MemberSearch /><br /><br />
      {/* State search component modifies its contents based on dropdown selection */}
      {/* and will show MediumProfiles on the state's representatives */}
      {/* will need to show many representatives */}
      {/* or add district filter for representative display (don't display any members until user has filled both state and district dropdowns?) */}
      <StateSearch /><br /><br />
      {/* leaderboard shows sets of 3, at first 1 list */}
      {/* 3 SmallProfiles showing stat related to leaderboard */}
      {/* show more than one leaderboard in the future */}
      <Leaderboard /><br /><br />
      <CongressStatus />
    </div>
  );
}

export default Dashboard;
