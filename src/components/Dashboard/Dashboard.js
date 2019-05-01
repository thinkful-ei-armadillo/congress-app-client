import React from 'react';
// import { useReducer } from 'react';
import MemberSearch from '../Member/MemberSearch';
import StateSearch from '../Member/StateSearch';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import CongressStatus from '../CongressStatus/CongressStatus';
import './Dashboard.css';
import MissedVotesGraph from '../Data/MissedVotesGraph';
// import MemberListPage from '../MemberListPage/MemberListPage';

// const MemberContext = React.createContext(null);

function Dashboard(props) {

//   const initialState = {
//     members: null,
//   }

//   const UPDATE_MEMBERS = 'UPDATE_MEMBERS';

// function reducer(state, action) {
//   switch (action.type) {
//     case UPDATE_MEMBERS:
//       return {
//         members: action.members,
//       };
//     default:
//       return initialState;
//   }
// }

//   const [members, setMembers] = React.useReducer(reducer, initialState)
  return (
    <div className='dashboard'>
      <div className='col1'>
        <MemberSearch />
        {/* <MemberContext.Provider value={{ members, setMembers }}>
          <MemberListPage members={members} />
        </MemberContext.Provider> */}
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
      <div className='col2'>
        <LeaderBoard />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Dashboard;
