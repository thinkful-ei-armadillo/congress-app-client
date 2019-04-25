import config from '../config';

const MemberApiService = {
  
  getMemberbyID(id) {
    return fetch(`http://localhost:8000/api/members/${id}`).then(res =>
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

  // getMember(id) {
  // 	let getEndpoint =
  // 		"https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json";
  // 	return fetch(getEndpoint + id, {
  // 		headers: {}
  // 	}).then(res =>
  // 		!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  // );
  // },

  getMembers(params) {
    let url = `${config.API_ENDPOINT}/members/search`;
    if (params.query) {
      url += `?query=${encodeURIComponent(params.query)}`;
    }
    return fetch(url, {
      method: 'GET'
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

};

export default MemberApiService;
