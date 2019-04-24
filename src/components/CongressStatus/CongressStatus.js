import React, { useState, useEffect } from "react";
import CongressApiService from "../../services/congress-api-service";
import SmallProfile from "../Profile/SmallProfile";

export default function CongressStatus(props) {
  const [bills, setBills] = useState(null);

  useEffect(()=>{
    CongressApiService.getBills().then(bills => {
        setBills(bills);
      });
  })
  return (
    <div>
      <p>What's happening on the floor?</p>
      <div>
        {bills && <ul>
        {bills.forEach(
        <li>Bill information w/  sponsor id, short_title, and title: 
            <SmallProfile props={props.bill.sponsor_id}/>
            <p>{props.bill.short_title}</p>
            <p>{props.bill.title}</p>
        </li>)}
        </ul>}
      </div>
    </div>
  );
}
