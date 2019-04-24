import config from "../config";

const CongressApiService = {
    getBills() {
		fetch(
			`${config.API_ENDPOINT}/116/both/bills/active.json`,
			{
				headers: {
					"X-API-Key": config.TOKEN_KEY
				}
			}
		).then(res => console.log(res));
	}
}

export default CongressApiService;