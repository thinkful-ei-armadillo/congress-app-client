import React, { useState, useEffect } from "react";
import MemberApiService from "../services/member-api-service";
import MediumProfile from "../components/Profile/MediumProfile";
import CompareMembers from "../components/CompareMembers/CompareMembers";

export default function CompareMembersRoute (props) {
	
    return (
        <section className="member-profile-container">
            <CompareMembers />
        </section>
    );
	}
