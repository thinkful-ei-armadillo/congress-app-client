import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import DashboardRoute from "../../routes/DashboardRoute";
import NotFoundRoute from "../../routes/NotFoundRoute";
import "./App.css";
import ProfileRoute from "../../routes/ProfileRoute";

function App() {
	return (
		<div className="App">
			<Header />
			<main role="main">
				{/*hasError && (
          <p>There was an error! Oh no!</p>
          )*/}
				<Switch>
					<Route exact path={"/"} component={DashboardRoute} />
					<Route path={"/profile/:id"} component={ProfileRoute} />
					<Route component={NotFoundRoute} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
