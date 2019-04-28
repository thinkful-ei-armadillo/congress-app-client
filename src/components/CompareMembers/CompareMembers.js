import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";
import MediumProfile from "../Profile/MediumProfile";
import CompareMemberListPage from "../CompareMemberListPage/CompareMemberListPage";
import './CompareMembers.css'

export default function CompareMembers(props) {
  
  const [members, setMembers] = useState(null);
  const [memberToDisplay, setMemberToDisplay] = useState(null);

  const submitForm = e => {
    e.preventDefault();
    const { search } = e.target;
    const params = { query: search.value };
    MemberApiService.getMembers(params).then(members => {
      setMembers(members);
    });
  };

  const setDisplay = member => {
    setMembers(null);
    setMemberToDisplay(member);
  };

  if (props && memberToDisplay === null) {
    setMemberToDisplay(props.member);
  }

  if (memberToDisplay) {
    return (
      <React.Fragment>
        <div className="oneBlock">
          <form className="compareForm" onSubmit={submitForm}>
            <input type="text" name="search" placeholder="Member of Congress"  className='compare-text-input'/>
          </form>
          <br /><br />
          <CompareMemberListPage members={members} setDisplay={setDisplay}/>
          <br /><br />
          <MediumProfile member={memberToDisplay} className='compare-member-profile' />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="oneBlock">
          <form onSubmit={submitForm}>
            <input type="text" name="search" placeholder="Member of Congress" className='compare-text-input'/>
          </form><br />
          <CompareMemberListPage members={members} setDisplay={setDisplay} />
        </div>
      </React.Fragment>
    );
  }
}
