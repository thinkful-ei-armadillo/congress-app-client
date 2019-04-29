import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";
import MemberListPage from "../MemberListPage/MemberListPage";
import "./MemberSearch.css";

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
		<section className="member-search">
			<form onSubmit={submitForm}>
				<input
					type="text"
					name="search"
					placeholder="Member of Congress"
					className="searchbar"
				/>
			</form>
			<br />
			<MemberListPage members={members} />
		</section>
	);
}
