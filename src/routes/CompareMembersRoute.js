import React from "react";
import CompareMembers from "../components/CompareMembers/CompareMembers";
import "./CompareMembersRoute.css";

export default function CompareMembersRoute(props) {
  document.title = 'MyCongress - Compare Members';
  return (
    <section id="compare-member-profile-container">
      {props.location.state && (
        <CompareMembers member={props.location.state.member} />
      )}
      {props.location.state === undefined && <CompareMembers />}
      <CompareMembers />
    </section>
  );
}
