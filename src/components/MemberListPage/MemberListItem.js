import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MemberListItem extends Component {
  render() {
    let { member } = this.props;
    return (
        <Link to={`/profile/${member.id}`}>
          {member.short_title}{' '}
          {member.first_name} {member.last_name}
        </Link>
    );
  }
}
