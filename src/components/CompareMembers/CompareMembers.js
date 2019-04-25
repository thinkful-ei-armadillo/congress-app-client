import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";
import MediumProfile from "../Profile/MediumProfile";
import MemberSearch from "../Member/MemberSearch";
import CompareMemberListPage from "../CompareMemberListPage/CompareMemberListPage";

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

	if (memberToDisplay) {
		return (
			<React.Fragment>
				<form onSubmit={submitForm}>
					<input type="text" name="search" placeholder="Congressmen" />
				</form>
				<CompareMemberListPage
					members={members}
					setMemberToDisplay={setMemberToDisplay}
				/>
				<MediumProfile member={memberToDisplay} />
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<form onSubmit={submitForm}>
					<input type="text" name="search" placeholder="Congressmen" />
				</form>{" "}
				<CompareMemberListPage
					members={members}
					setMemberToDisplay={setMemberToDisplay}
				/>
			</React.Fragment>
		);
	}
}
