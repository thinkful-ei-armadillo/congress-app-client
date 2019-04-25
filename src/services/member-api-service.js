import config from "../config";

const MemberApiService = {
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
    console.log(url)
    return fetch(url, {
      method: 'GET'
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }
      else {
        return res.json()
      }  
    });
  },

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
				res.json();
			}
		});
	},

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
	getTop3s() {
		return fetch(`${config.API_ENDPOINT}/top3s`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default MemberApiService;
