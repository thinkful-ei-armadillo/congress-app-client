import React, { Component } from 'react';
// import MemberApiService from '../../services/member-api-service';
// import { Link } from 'react-router-dom';
import MemberListItem from './MemberListItem';
import './MemberListPage.css';

export default class MemberListPage extends Component {
  renderMembers() {
    if (this.props.members === null) {
      return <div id='no-search-feedback'></div>;
    } else if (this.props.members.length === 0) {
      return <div id='no-results-feedback'>No Results. Please Retry With a New Search.</div>;
    }
    else {
      return this.props.members.map(member => (
        <div key={member.id} id='search-results'>
          <MemberListItem key={member.id} member={member} />
        </div>
      ));
    }
  }
  render() {
    return <div className="container">{this.renderMembers()}</div>;
  }
}
