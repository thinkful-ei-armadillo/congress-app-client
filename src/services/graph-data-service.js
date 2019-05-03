// import config from '../config';
import MemberApiService from './member-api-service';
// import CongressApiService from './congress-api-service';

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

    // let repubAvg = repubArr.reduce((a, b) => a + b / repubArr.length, []);
    // let demAvg = demArr.reduce((a, b) => a + b / demArr.length, []);
    // let indAvg = indArr.reduce((a, b) => a + b / indArr.length, []);

    let repubAvg = 0;
    let demAvg = 0;
    let indAvg = 0;
    
    for (let j = 0; j < repubArr.length; j++) {
      repubAvg += parseInt(repubArr[j], 10);
    }

    console.log('republican total ', repubAvg);
    if (repubAvg !== 0) {
      repubAvg = repubAvg / repubArr.length;
    }
    
    for (let k = 0; k < demArr.length; k++) {
      demAvg += parseInt(demArr[k], 10);
    }

    console.log('democrat total ', demAvg);
    if (demAvg !== 0) {
      demAvg = demAvg / demArr.length;
    }

    for (let l = 0; l < indArr.length; l++) {
      indAvg += parseInt(indArr[l], 10);
    }

    console.log('independent total ', indAvg);

    if (indAvg !== 0) {
      indAvg = indAvg / indArr.length;
    }

    // if (demAvg === NaN) {
    //   demAvg = 0;
    // }

    // if (repubAvg === NaN) {
    //   repubAvg = 0;
    // }

    console.log({ repub: repubAvg, dem: demAvg, ind: indAvg })

    const result = [repubAvg, demAvg, indAvg]
    // return { repub: repubAvg, dem: demAvg, ind: indAvg };
    return result;
  }
};
// CongressApiService.getBills(),
export default graphData;
