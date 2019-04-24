import config from "../config";

const MemberApiService = {
  getMember(id) {
    return fetch(
      /* NEED ENDPOINT */ {
        headers: {}
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getSenators(state) {
    // 'https://api.propublica.org/congress/v1/members/{chamber}/{state}/{district}/current.json';
    return fetch(
      `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`,
      {
        headers: {
          "X-API-Key": config.TOKEN_KEY
        }
      }
    ).then(res => console.log(res));
  }
};

export default MemberApiService;
