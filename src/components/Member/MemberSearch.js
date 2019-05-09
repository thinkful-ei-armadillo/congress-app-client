import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";
import MemberListPage from "../MemberListPage/MemberListPage";
import { Button } from "../Utils/Utils";
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
					minLength="3"
					name="search"
					placeholder="Search for a Member of Congress"
					className="searchbar"
					list="members"
					autoComplete="on"
					data-cy="search"
					aria-label="search"
				/>

				<datalist id="members">
					<option value="Nancy Pelosi" />
					<option value="Adam Schiff" />
					<option value="Mitch McConnell" />
					<option value="Jerrold Nadler" />
					<option value="Patrick Leahy" />
					<option value="Chuck Grassley" />
					<option value="Dianne Feinstein" />
					<option value="Patty Murray" />
					<option value="Susan Collins" />
					<option value="Chuck Schumer" />
					<option value="Mike Crapo" />
					<option value="Debbie Stabenow" />
				</datalist>
				<Button type="submit" className="member-search-submit">
					Submit
				</Button>
			</form>
			<br />
			<MemberListPage members={members} data-cy="results" />
		</section>
	);
}
