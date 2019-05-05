import React, { useState } from "react";
import MemberApiService from "../../services/member-api-service";
import MemberListPage from "../MemberListPage/MemberListPage";
import { Button } from "../Utils/Utils";
import "./StateSearch.css";

export default function StateSearch(props) {
	const [members, setMembers] = useState(null);

	const setStateSearch = e => {
		const state = e.target.value;
		console.log(e.target.value);
		if (state !== "") {
			MemberApiService.getMembersByState(state).then(members => {
				setMembers(members);
			});
		}
	};

	const handleAddressSearch = e => {
		e.preventDefault();
		let address = [
			e.target.address.value,
			e.target.city.value,
			e.target.state.value
		].join(" ");
		console.log(address);
		MemberApiService.getMemberbyAddress(address).then(members => {
			console.log(members);
			setMembers(members);
		});
	};

	return (
		<section className="state-reps">
			<div className="search">
				<form
					className="address-search-form"
					onSubmit={e => handleAddressSearch(e)}>
					<label htmlFor="address-search-form">
						Search for My Representatives
					</label>
					{/* <label htmlFor="address"> Address</label> */}
					<input
						type="text"
						className="search-input"
						name="address"
						placeholder="Address"
						required
					/>
					{/* <label htmlFor="city"> City</label> */}
					<input
						type="text"
						className="search-input"
						name="city"
						placeholder="City"
						required
					/>
					{/* <label htmlFor="state"> State</label> */}
					<input
						type="text"
						className="search-input"
						name="state"
						placeholder="State"
						required
					/>
					<div className="input search-input">
						<input type="submit" />
					</div>
				</form>

				<form className="state-search-form">
					<label htmlFor="state-search">
						Search for a State's Representatives
					</label>
					<br />
					<select onChange={e => setStateSearch(e)} className="state-search search">
						<option value="">Select a State</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
				</form>
			</div>
			<br />
			<MemberListPage members={members} />
		</section>
	);
}
