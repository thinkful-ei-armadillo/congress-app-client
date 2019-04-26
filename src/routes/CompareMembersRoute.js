import React, { useState, useEffect } from "react";
import MemberApiService from "../services/member-api-service";
import MediumProfile from "../components/Profile/MediumProfile";
import CompareMembers from "../components/CompareMembers/CompareMembers";
import "./CompareMembersRoute.css";

export default function CompareMembersRoute(props) {
  console.log("you are here @ CompareMembersRoute");
  return (
    <section className="compare-member-profile-container">
      {props.location.state && (
        <CompareMembers member={props.location.state.member} />
      )}
      {props.location.state === undefined && <CompareMembers />}
      <CompareMembers />
    </section>
  );
}
