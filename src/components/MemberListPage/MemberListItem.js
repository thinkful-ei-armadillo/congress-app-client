import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MemberListItem extends Component {
  render() {
    let { member } = this.props;
    return (
      <React.Fragment>
        <Link to={`/profile/${member.id}`}>
          {member.first_name} {member.last_name}, {member.title}
        </Link>
      </React.Fragment>
    );
  }
}
