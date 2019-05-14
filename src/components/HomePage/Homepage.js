import React from "react";
import { Button } from "../Utils/Utils";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <section className="onboarding">
        <h1 id="onboard-title">Welcome to MyCongress! </h1>
        <p>
          With MyCongress, you can access information on Congressmembers'
          efficiency with their bill sponsorship and vote frequency.
        </p>
        <p>
          On the dashboard linked below, you may search for Congressmembers by
          name or state. You can also compare two members either through
          the 'Compare Members' link in the navigation bar or on the bottom of
          each member's page.
        </p>
        <p>
          At the bottom of the dashboard, you will find information on recently
          introduced or active bills on the floor as well as current
          Congressional committees. On the sidebar, the missed votes leaderboard
          lists the members that rank in the top 3 for missed votes.
        </p>
        <p>
          If you register to create an account with us, you can also follow
          individual Congressmembers so you can better track their level of
          activity on the floor of Congress.
        </p>
        <Link to="/dashboard">
          <Button id="onboard-button">Begin!</Button>
        </Link>
      </section>
      <p id="about-us">
        Created with love by:<br />
        <a href='https://github.com/owencyr' target='_blank' rel='noopener noreferrer'>Owen Cyr</a>
        <a href='https://github.com/danielors' target='_blank' rel='noopener noreferrer'>Daniel Ors</a>
        <a href='https://github.com/secilreel' target='_blank' rel='noopener noreferrer'>Irem Seçil Reel Sen</a>
        <a href='https://github.com/lahrime' target='_blank' rel='noopener noreferrer'>Ali Lahrime</a>
        <a href='https://github.com/paypay43' target='_blank' rel='noopener noreferrer'>Payman Kossari</a>
      </p>
    </>
  );
}
