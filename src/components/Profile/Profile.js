import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { Button } from '../Utils/Utils';
import UserContext from '../../contexts/UserContext';
import MemberApiService from '../../services/member-api-service';
import MemberContext from '../../contexts/MemberContext';

function Profile(props) {
  // let { handle } = props.member;
  // console.log(props.member)
  const user = useContext(UserContext);
  const [followedMembers, setFollowedMembers] = useState(null);
  const [isFollowing, setFollowing] = useState(false);
  // const newMember = useContext(MemberContext)

  const followMember = () => {
    MemberApiService.addFollowedMembers(props.member.id);
    setFollowing(true);
    // look at TJ's workshop, wk8 on hooks
    // newMember.setMember();
    //props.props.history.push('/dashboard');
  };

  const unFollowMember = () => {
    MemberApiService.removeFollowedMembers(props.member.id);
    setFollowing(false);
    //props.props.history.push('/dashboard');
  };

  useEffect(() => {
    MemberApiService.getFollowedMembersId(user.user.id).then(data => {
      debugger;
      setFollowedMembers(data);
      data.forEach(e => {
        if (e.member_id === props.member.id) {
          setFollowing(true);
        }
      });
      console.log(followedMembers);
      /*followedMembers.forEach(e => {
        if (e.member_id === props.member.id) {
          setFollowing(true);
        }
      });*/
    });
  }, []);

  // members id with getFollowedMemebers
  // if array.includes(props.member.id)

  const renderFollowButton = () => {
    debugger;
    if (isFollowing) {
      return (
        <Button className="add-member-following" onClick={unFollowMember}>
          Unfollow Congress Member
        </Button>
      );
    } else {
      return (
        <Button className="add-member-following" onClick={followMember}>
          Follow Congress Member
        </Button>
      );
    }
  };
  console.log(followedMembers);
  return (
    <div className="main-profile">
      <img
        className="profile-picture"
        alt={props.member.alt}
        onError={e => {
          e.target.onerror = null;
          e.target.src =
            'https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg';
        }}
        src={`https://theunitedstates.io/images/congress/225x275/${
          props.member.id
        }.jpg`}
      />
      <p className="name">
        {props.member.short_title} {props.member.first_name}{' '}
        {props.member.middle_name} {props.member.last_name}
        {props.member.suffix} ({props.member.party})
      </p>
      <p className="dob">Born: {props.member.date_of_birth}</p>
      <section className="member-social-media">
        {!props.member.twitter_account ? (
          ''
        ) : (
          <a
            className="twitter"
            href={`https://twitter.com/${props.member.twitter_account}`}
          >
            <i className="fab fa-twitter" />
          </a>
        )}
        {!props.member.youtube_account ? (
          ''
        ) : (
          <a
            className="youtube"
            href={`https://youtube.com/${props.member.youtube_account}`}
          >
            <i className="fab fa-youtube" />
          </a>
        )}
        {!props.member.facebook_account ? (
          ''
        ) : (
          <a
            className="facebook"
            href={`https://facebook.com/${props.member.facebook_account}`}
          >
            <i className="fab fa-facebook" />
          </a>
        )}
        <p className="phonenum">{props.member.phone}</p>
        <p className="faxnum">{props.member.fax}</p>
      </section>
      <section className="stats">
        <p className="seniority"> Years in Senate: {props.member.seniority}</p>
        <p className="next_election">
          {' '}
          Next Election: {props.member.next_election}
        </p>
        <p className="total_votes">
          {' '}
          Total Votes Cast: {props.member.total_votes}
        </p>
        <p className="missed_votes">
          {' '}
          Missed Voting Opportunities:{props.member.missed_votes}
        </p>
        <p className="missed_votes_pct">
          {' '}
          Missed Voting Opportunities %: {props.member.missed_votes_pct}
        </p>
        <p className="votes_with_party_pct">
          {' '}
          Votes with Party %: {props.member.votes_with_party_pct}
        </p>
      </section>
      <section className="committee_chair">
        {!props.member.committee_id ? (
          ''
        ) : (
          <div>
            <p>
              Chair of: The{' '}
              <a href={`${props.member.committee_url}`} target="blank">
                {props.member.committee_name}
              </a>
            </p>
          </div>
        )}
      </section>
      <Link
        to={{
          pathname: '/compare',
          state: {
            member: props.member
          }
        }}
      >
        <Button className="profile-compare" id="compare-button">
          Compare With Another Member
        </Button>
      </Link>
      {user.user.id && isFollowing !== null && renderFollowButton()}
      {/*console.log('member', props.member) &&
        console.log('followedMembers', followedMembers) && (
          // && (followedMembers.includes(props.member.id)) ?
				// : */}
    </div>
  );
}

export default Profile;
