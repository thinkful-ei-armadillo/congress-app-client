import React, { useEffect, useState, useContext } from 'react';
import MemberApiService from '../../services/member-api-service';
import MediumProfile from '../Profile/MediumProfile';
import UserContext from '../../contexts/UserContext';
import './Following.css';

export default function Following(props) {
  const [members, setMembers] = useState(null);
  const user = useContext(UserContext);

  useEffect(() => {
    debugger;
    MemberApiService.getFollowedMembers(user.user.id).then(data =>
      setMembers(data)
    );
  }, []);

  const renderFollowedMembers = () => {
    return members.map(member => {
      console.log(member);
      return (
        <li className="followed-member" key={member.id}>
          <MediumProfile member={member} />
        </li>
      );
    });
  };
  return (
    <div className="following-wrapper">
      <p>
        <b>Congress Members I am following: </b>
      </p>
      <div>
        {members && (
          <ul className="following-list">{renderFollowedMembers()}</ul>
        )}
      </div>
    </div>
  );
}
