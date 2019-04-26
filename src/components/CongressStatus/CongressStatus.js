import React, { useState, useEffect } from 'react';
import CongressApiService from '../../services/congress-api-service';
import MediumProfile from '../Profile/MediumProfile';
import MemberApiService from '../../services/member-api-service';

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
          Bill information w/ sponsor id, short_title, and title:
          {/* <MediumProfile member={bill.member} /> */}
          <p>{bill.title}</p>
          <p>{bill.latest_major_action}</p>
        </li>
      );
    });
  };
  return (
    <div>
      <p>What's happening on the floor?</p>
      <div>{bills && <ul>{renderBills()}</ul>}</div>
    </div>
  );
}
