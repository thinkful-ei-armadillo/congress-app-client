import React, { useState, useEffect } from "react";
import MemberApiService from "../services/member-api-service";
import MediumProfile from "../components/Profile/MediumProfile";

export default function CompareMembersRoute (props) {
    const [member, setMember] = useState(null);

    useEffect(()=>{
        let memberID = props.match.params.id;
		MemberApiService.getMemberbyID(memberID).then(member =>
			setMember(member)
		);
    })
	
    return !member ? (
        "Now Loading..."
    ) : (
        <section className="member-profile-container">
            <MediumProfile member={member} />
        </section>
    );
	}
