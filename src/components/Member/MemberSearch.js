import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";

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

	return <div>Hello</div>;
}
