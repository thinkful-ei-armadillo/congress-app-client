import React, { useState, useEffect } from 'react';
import CongressApiService from '../../services/congress-api-service';
import MediumProfile from '../Profile/MediumProfile';
import MemberApiService from '../../services/member-api-service';
import './CongressStatus.css';

export default function CongressStatus(props) {
  const [bills, setBills] = useState(null);

  useEffect(() => {
    CongressApiService.getBills().then(data => {
      setBills(data);
    });
  }, []);

  const renderBills = () => {
    return bills.map(bill => {
      return (
        <li>
          <p>{bill.title}</p>
          <p>{bill.latest_major_action}</p>
          <p>
            <b>Sponsor</b>
          </p>
          <MediumProfile member={bill.member} />
        </li>
      );
    });
  };
  return (
    <div className="congress-status-component">
      <h3>
        <b>What's happening on the floor?</b>
      </h3>
      <div>{bills && <ul className="bill-list">{renderBills()}</ul>}</div>
    </div>
  );
}
