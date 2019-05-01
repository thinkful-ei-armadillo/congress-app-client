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
		<section className='member-search'>
			<form onSubmit={submitForm}>
				<input
					type='text'
					name='search'
					placeholder='Member of Congress'
					className='searchbar'
					list='members'
					autoComplete='on'
				/>
				<datalist id='members'>
					<option value='Nancy Pelosi'/>
					<option value='Adam Schiff'/>
					<option value='Mitch McConnell'/>
					<option value='Jerrold Nadler'/>
					<option value='Patrick Leahy'/>
					<option value='Chuck Grassley'/>
					<option value='Dianne Feinstein'/>
					<option value='Patty Murray'/>
					<option value='Susan Collins'/>
					<option value='Chuck Schumer'/>
					<option value='Mike Crapo'/>
					<option value='Debbie Stabenow'/>
				</datalist>
			</form>
			<br />
			<MemberListPage members={members} />
		</section>
	);
}
