import React, { useState } from 'react';
import MemberApiService from '../../services/member-api-service';
import MediumProfile from '../Profile/MediumProfile';
import MemberSearch from '../Member/MemberSearch';

export default function CompareMembers(props) {
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
        <MemberSearch />
        <MemberSearch />
    </React.Fragment>
  );
}