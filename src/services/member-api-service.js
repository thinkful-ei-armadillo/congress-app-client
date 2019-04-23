import config from "../config";

const MemberApiService = {
	getMember(id) {
		let getEndpoint =
			"https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json";
		return fetch(getEndpoint + id, {
			headers: {}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},

	getSenators(state) {
		// 'https://api.propublica.org/congress/v1/members/{chamber}/{state}/{district}/current.json';
		return fetch(
			`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`,
			{
				headers: {
					"X-API-Key": "1N3dptH1qHuNWHZmeTZ5YsKbGx34eHEe4sSYDwLW"
				}
			}
		).then(res => console.log(res));
	}
};

export default MemberApiService;
