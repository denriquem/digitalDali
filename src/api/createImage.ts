import { Configuration, OpenAIApi } from "openai";
import env from "react-dotenv";

export const createImage = async (prompt: string) => {
	const configuration = new Configuration({
		organization: env.REACT_APP_ORG_ID,
		apiKey: env.REACT_APP_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const response2 = await openai.createImage({
		prompt,
	});

	console.log(response2);
	const ans = response2.data.data[0].url;
	console.log(ans);
	return ans;
};
