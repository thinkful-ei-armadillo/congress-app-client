// import config from '../config';
import MemberApiService from './member-api-service';
// import CongressApiService from './congress-api-service';

const graphData = {
  async getNumbers() {
    let repubArr = [];
    let demArr = [];
    let indArr = [];
    let fullArr = await MemberApiService.getMembers('');
    console.log(fullArr)
    for (let i = 0; i < fullArr.length; i++) {
      if (fullArr[i].party === 'R') { 
        // console.log('republican found!')
        repubArr.push(fullArr[i].missed_votes_pct);
      }
      if (fullArr[i].party === 'D') {
        // console.log('democrat found!')
        demArr.push(fullArr[i].missed_votes_pct);
      }
      if (fullArr[i].party === 'ID') {
        // console.log('independent found!')
        indArr.push(fullArr[i].missed_votes_pct);
      }
    }
    let repubAvg = repubArr.reduce((a, b) => a + b / repubArr.length, []);
    let demAvg = demArr.reduce((a, b) => a + b / demArr.length, []);
    let indAvg = indArr.reduce((a, b) => a + b / indArr.length, []);
    return { repub: repubAvg, dem: demAvg, ind: indAvg };
  }
};
// CongressApiService.getBills(),
export default graphData;
