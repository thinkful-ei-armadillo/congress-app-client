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
		return fetch(
			`${config.API_ENDPOINT}/members/senate/${state}/current.json`,
			{
				headers: {
					"X-API-Key": config.TOKEN_KEY
				}
			}
		).then(res => console.log(res));
	}
};

export default MemberApiService;
