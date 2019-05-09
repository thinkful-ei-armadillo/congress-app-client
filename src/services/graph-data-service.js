import MemberApiService from './member-api-service';

const graphData = {
  async getNumbers() {
    let repubArr = [];
    let demArr = [];
    let indArr = [];
    let fullArr = await MemberApiService.getMembers('');

    for (let i = 0; i < fullArr.length; i++) {
      if (fullArr[i].party === 'R' && fullArr[i].missed_votes_pct !== null) {
        repubArr.push(fullArr[i].missed_votes_pct);
      }
      if (fullArr[i].party === 'D' && fullArr[i].missed_votes_pct !== null) {
        demArr.push(fullArr[i].missed_votes_pct);
      }
      if (fullArr[i].party === 'ID' && fullArr[i].missed_votes_pct !== null) {
        indArr.push(fullArr[i].missed_votes_pct);
      }
    }

    let repubAvg = 0;
    let demAvg = 0;
    let indAvg = 0;

    for (let j = 0; j < repubArr.length; j++) {
      repubAvg += parseInt(repubArr[j], 10);
    }

    if (repubAvg !== 0) {
      repubAvg = repubAvg / repubArr.length;
    }

    for (let k = 0; k < demArr.length; k++) {
      demAvg += parseInt(demArr[k], 10);
    }

    if (demAvg !== 0) {
      demAvg = demAvg / demArr.length;
    }

    for (let l = 0; l < indArr.length; l++) {
      indAvg += parseInt(indArr[l], 10);
    }

    if (indAvg !== 0) {
      indAvg = indAvg / indArr.length;
    }

    const result = [repubAvg, demAvg, indAvg]
    return result;
  }
};

export default graphData;
