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
			return (
				<li className="committee-info" key={committee.committee_id}>
					<h3 className="committee-name">
						{committee.committee_name}
					</h3>
					<div className="committee-chamber">
            <b>Chamber: </b>
            {committee.committee_chamber}
          </div>
          <div className="committee-url">
            <b>Link: </b>
            <a href={`${committee.committee_url}`} target='blank'>Click here to open the committee's site</a>
            </div>
					<div className="committee-chair">
						<b>Chair: </b>
            <MediumProfile member={committee.member} />
          </div>
        </li>
      );
    });
  };

  return (
    <div className="committees-component">
      <header>
        <h2 id='committees-title'>Committees</h2>
      </header>
      <div>{committees && <ul className='committee-list'>{renderCommittees()}</ul>}</div>
    </div>
  );
}
