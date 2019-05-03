import config from '../config';

const CongressApiService = {
  getBills(filter) {
    return fetch(`${config.API_ENDPOINT}/bills?filter=${filter}`, {
      method: 'GET'
    }).then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e));
      } else {
        return res.json();
      }
    });
  },

  getCommittees() {
    return fetch(`${config.API_ENDPOINT}/committees`, {
      method: 'GET'
    }).then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e));
      } else {
        return res.json();
      }
    });
  }
};

export default CongressApiService;
