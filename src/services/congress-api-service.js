import config from "../config";

const CongressApiService = {
  getBills() {
    fetch(`${config.API_ENDPOINT}/bills/`, {
      method: "GET"
    }).then(res => {
      debugger;
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  }
};

export default CongressApiService;
