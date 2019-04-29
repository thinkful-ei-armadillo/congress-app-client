import React, { useState, useEffect } from "react";
import CongressApiService from "../../services/congress-api-service";
import MediumProfile from "../Profile/MediumProfile";
import Moment from "react-moment";
import "./CongressStatus.css";

export default function CongressStatus(props) {
	const [bills, setBills] = useState(null);

	useEffect(() => {
		CongressApiService.getBills().then(data => {
			setBills(data);
		});
	}, []);
	/*
   <b>Date:</b> <Moment format="YYYY/MM/DD">{event.date}</Moment>
          </div>
        </section>
        <footer className="EventListItem__footer">
          <b>Created:</b>{' '}
          <Moment fromNow ago>
            {event.date_created}
          </Moment>{' '}*/

	const renderBills = () => {
		return bills.map(bill => {
			// console.log(bill);
			return (
				<li className="bill-info" key={bill.id}>
					<div className="bill-title">
						<b>Title: </b>
						{bill.title}
					</div>
					<div className="bill-introduced">
						<b>Introduced: </b>
						<Moment fromNow ago>
							{bill.introduced_date}
						</Moment>{" "}
						ago
					</div>
					<div className="bill-status">
						<b>Status: </b>
						{bill.latest_major_action}
					</div>
					<div className="bill-sponsor">
						<b>Sponsor</b>

            <MediumProfile member={bill.member} />
          </div>
        </li>
      );
    });
  };
  return (
    <div className="congress-status-component">
      <p>
        <b>What's happening on the floor?</b>
      </p>
      <div>{bills && <ul className="bill-list">{renderBills()}</ul>}</div>
    </div>
  );
}
