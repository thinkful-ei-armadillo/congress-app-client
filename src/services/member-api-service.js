import config from '../config';

const MemberApiService = {
  getMemberbyID(id) {
    return fetch(`http://localhost:8000/api/members/${id}`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
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

  getSenators(state) {
    // 'https://api.propublica.org/congress/v1/members/{chamber}/{state}/{district}/current.json';
    return fetch(
      `${config.API_ENDPOINT}/members&state=${state}`,
      {
        headers: {
          'X-API-Key': config.TOKEN_KEY
        }
      }
    ).then(res => console.log(res));
  }
};

export default MemberApiService;
