import config from "../config";
import TokenService from "./token-service";

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
		
		if (params) {
			url += `?query=${encodeURIComponent(params)}`;
		}
		
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
	},

	getFollowedMembers(id) {
		return fetch(`${config.API_ENDPOINT}/users/${id}/followed`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},

	getFollowedMembersId(id) {
		return fetch(`${config.API_ENDPOINT}/users/${id}/favorites`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},

	addFollowedMembers(memberID) {
		
		return fetch(`${config.API_ENDPOINT}/users/${memberID}/followed`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${TokenService.getAuthToken()}`
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},

	removeFollowedMembers(id) {
		
		return fetch(`${config.API_ENDPOINT}/users/${id}/followed`, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${TokenService.getAuthToken()}`
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default MemberApiService;
