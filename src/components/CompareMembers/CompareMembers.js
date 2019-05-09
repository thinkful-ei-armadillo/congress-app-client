import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";
import MediumProfile from "../Profile/MediumProfile";
import CompareMemberListPage from "../CompareMemberListPage/CompareMemberListPage";
import "./CompareMembers.css";
import { Button } from "../Utils/Utils";

export default function CompareMembers(props) {
	const [members, setMembers] = useState(null);
	const [memberToDisplay, setMemberToDisplay] = useState(null);

	const submitForm = e => {
		e.preventDefault();
		const { search } = e.target;
		const params = { query: search.value };
		MemberApiService.getMembers(params).then(members => {
			setMembers(members);
		});
	};

	const setDisplay = member => {
		setMembers(null);
		setMemberToDisplay(member);
	};

	if (props && memberToDisplay === null) {
		setMemberToDisplay(props.member);
	}

	if (memberToDisplay) {
		return (
			<div className="oneBlock">
				<form onSubmit={submitForm} data-cy="compare_form">
					<input
						type="text"
						minLength="3"
						name="search"
						placeholder="Search for a Member of Congress"
						className="searchbar"
						list="members"
						autoComplete="on"
						data-cy="compare-search"
						aria-label="search"
					/>
					{/* <datalist id="members">
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
					</datalist> */}
					<Button type="submit" className="member-search-submit">
						Submit
					</Button>
				</form>
				<br />
				<br />
				<CompareMemberListPage members={members} setDisplay={setDisplay} />
				<br />
				<br />
				<MediumProfile
					member={memberToDisplay}
					className="compare-member-profile"
				/>
			</div>
		);
	} else {
		return (
			<div className="oneBlock">
				<form onSubmit={submitForm} data-cy="compare_form">
					<input
						type="text"
						minLength="3"
						name="search"
						placeholder="Search for a Member of Congress"
						className="searchbar"
						list="members"
						autoComplete="on"
						data-cy="compare-search"
						aria-label="search"
					/>
					{/* <datalist id="members">
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
					</datalist> */}
					<Button type="submit" className="member-search-submit">
						Submit
					</Button>
				</form>
				<br />
				<CompareMemberListPage members={members} setDisplay={setDisplay} />
			</div>
		);
	}
}
