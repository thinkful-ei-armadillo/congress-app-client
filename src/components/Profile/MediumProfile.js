import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function MediumProfile(props) {
  return (
    <div>
      <img
        className="profile-picture"
        alt="Photo of Congressperson"
        onError={e => {
          e.target.onerror = null;
          e.target.src =
            'https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg';
        }}
        src={`https://theunitedstates.io/images/congress/225x275/${
          props.member.id
        }.jpg`}
      />
      <p className="title">{props.short_title}</p>
      <Link to={`/profile/${props.member.id}`} className="name">
        {props.member.first_name} {props.member.middle_name}{' '}
        {props.member.last_name}
        {props.member.suffix} ({props.member.party})
      </Link>
      <section className="member-social-media">
        <p className="phonenum">{props.member.phone}</p>
        <p className="faxnum">{props.member.fax}</p>
      </section>
      <section className="stats">
        <p className="missed_votes_pct">
          {' '}
          Missed Voting Opportunities %: {props.member.missed_votes_pct}
        </p>
        <p className="votes_with_party_pct">
          {' '}
          Votes with Party %: {props.member.votes_with_party_pct}
        </p>
      </section>
    </div>
  );
}

export default MediumProfile;
