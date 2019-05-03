import config from "../config";

const MemberApiService = {
	getMembers(params) {
		let url = `${config.API_ENDPOINT}/members/search`;
		if (params.query) {
			url += `?query=${encodeURIComponent(params.query)}`;
		}
		return fetch(url, {
			method: "GET"
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getMemberbyID(id) {
		return fetch(`${config.API_ENDPOINT}/members/${id}`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},

	getMembersByState(params) {
		let url = `${config.API_ENDPOINT}/members`;
		console.log(params);

		if (params) {
			url += `?query=${encodeURIComponent(params)}`;
		}
		console.log(url);
		return fetch(url, {
			method: "GET"
		}).then(res => {
			if (!res.ok) {
				res.json().then(e => Promise.reject(e));
			} else {
				return res.json();
			}
		});
	},
	getMemberbyAddress(params) {
		let url = `${config.API_ENDPOINT}/members?address=${encodeURIComponent(
			params
    )}`;
    console.log(encodeURIComponent(params))
		return fetch(url, {
			method: "GET"
		}).then(res => {
			if (!res.ok) {
				res.json().then(e => Promise.reject(e));
			} else {
				return res.json();
			}
		});
	},
	getTop3s() {
		return fetch(`${config.API_ENDPOINT}/top3s`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default MemberApiService;
