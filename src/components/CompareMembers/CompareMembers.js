import React, { useState, useEffect } from "react";
import MemberApiService from "../../services/member-api-service";
import MediumProfile from "../Profile/MediumProfile";
import MemberSearch from "../Member/MemberSearch";
import CompareMemberListPage from "../CompareMemberListPage/CompareMemberListPage";
import MemberContext from "../../contexts/MemberContext";

export default function CompareMembers(props) {
  // static contextType = MemberContext;
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

  // useEffect(()=>{
  // 	MemberApiService.getMemberbyID(props).then(member => {
  // 		setMembers(member);
  // 	});
  // },[])

  if (props && memberToDisplay === null) {
    setMemberToDisplay(props.member);
  }

  if (memberToDisplay) {
    return (
      <React.Fragment>
        <div className="oneBlock">
          <form className="compareForm" onSubmit={submitForm}>
            <input type="text" name="search" placeholder="Congressmen" />
          </form>
          <br />
          <CompareMemberListPage members={members} setDisplay={setDisplay} />
          <br />
          <MediumProfile member={memberToDisplay} />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="oneBlock">
          <form onSubmit={submitForm}>
            <input type="text" name="search" placeholder="Congressmen" />
          </form>{" "}
          <CompareMemberListPage members={members} setDisplay={setDisplay} />
        </div>
      </React.Fragment>
    );
  }
}
