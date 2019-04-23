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
	}
};

export default MemberApiService;
