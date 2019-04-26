import React, { useState } from 'react';
import MemberApiService from '../../services/member-api-service';
import MemberListPage from '../MemberListPage/MemberListPage';
import './MemberSearch.css';

export default function MemberSearch(props) {
	const [members, setMembers] = useState(null);

	const submitForm = e => {
		e.preventDefault();
		const { search } = e.target;
		const params = { query: search.value };
		MemberApiService.getMembers(params).then(members => {
			setMembers(members);
		});
	};

  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        <input type="text" name="search" placeholder="Congressmen" id='searchbar'/>
      </form><br />
      <MemberListPage members={members} />
    </React.Fragment>

  );

}