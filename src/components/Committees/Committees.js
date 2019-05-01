import React, { useState, useEffect } from "react";
import CongressApiService from "../../services/congress-api-service";
import MediumProfile from "../Profile/MediumProfile";
import "./Committees.css";

export default function Committees(props) {
  const [committees, setCommittees] = useState(null);

  useEffect(() => {
    CongressApiService.getCommittees().then(data => setCommittees(data));
  }, []);

  const renderCommittees = () =>{
    return committees.map(committee => {
			console.log(committee);
			return (
				<li className="committee-info" key={committee.committee_id}>
					<div className="committee-name">
						<b>Name: </b>
						{committee.committee_name}
					</div>
					<div className="committee-chamber">
            <b>Chamber: </b>
            {committee.committee_chamber}
          </div>
          <div className="committee-url">
            <b>Link: </b>
            {committee.committee_url}
            </div>
					<div className="committee-chair">
						<b>Chair: </b>
            {/* <MediumProfile member={committee.chair_id} /> */}
          </div>
        </li>
      );
    });
  };

  return (
    <div className="committees-component">
      <p>
        <b>Committees</b>
      </p>
      <div>{committees && <ul className='committee-list'>{renderCommittees()}</ul>}</div>
    </div>
  );
}
