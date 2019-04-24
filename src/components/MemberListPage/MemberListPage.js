import React, { Component } from 'react';
import MemberApiService from '../../services/member-api-service';
import { Link } from 'react-router-dom';
import MemberListItem from './MemberListItem';

export default class MemberListPage extends Component {
  renderMembers() {
    if (this.props.members === null) {
      return <div>Please Search for Members</div>;
    } else {
      return this.props.members.map(member => (
        <div key={member.id}>
          <MemberListItem key={member.id} member={member} />
        </div>
      ));
    }
  }
  render() {
    return <div className="container">{this.renderMembers()}</div>;
  }
}
