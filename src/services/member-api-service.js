import config from '../config';
import TokenService from './token-service'

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
    console.log(url);
    return fetch(url, {
      method: 'GET'
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      } else {
        return res.json();
      }
    });
  },

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
  getTop3s() {
    return fetch(`${config.API_ENDPOINT}/top3s`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getFollowedMembers(id){
    return fetch(`${config.API_ENDPOINT}/users/${id}/followed`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  addFollowedMembers(id){
    console.log(id)
    return fetch(`${config.API_ENDPOINT}/users/${id}/followed`,{
    method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

};

export default MemberApiService;
