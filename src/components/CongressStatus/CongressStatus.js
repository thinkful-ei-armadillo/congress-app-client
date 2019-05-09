import React, { useState, useEffect } from "react";
import CongressApiService from "../../services/congress-api-service";
import MediumProfile from "../Profile/MediumProfile";
import Moment from "react-moment";
import "./CongressStatus.css";

export default function CongressStatus(props) {
	const [bills, setBills] = useState(null);
	const [billFilter, setBillFilter] = useState("introduced");

	useEffect(() => {
		CongressApiService.getBills(billFilter).then(data => {
			setBills(data);
		});
	}, [billFilter]);

	const renderBills = () => {
		return bills.map(bill => {
			return (
				<li className="bill-info" key={bill.bill_id}>
					<h3 className="bill-title">
						<b>Title:</b> {bill.title}
					</h3>
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
			<div id="bills-header">
				<h2>Bills On The Floor</h2>
				<select
					className="bill-filter"
					onChange={e => {
						setBillFilter(e.target.value);
					}}
					value={billFilter} aria-label='bill-filter'>
					<option value="introduced">Introduced</option>
					<option value="active">Active</option>
				</select>
			</div>
			<div>{bills && <ul className="bill-list">{renderBills()}</ul>}</div>
		</div>
	);
}
