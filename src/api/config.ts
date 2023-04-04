import { Configuration, OpenAIApi } from "openai";
import env from "react-dotenv";

const configuration = new Configuration({
	organization: env.REACT_APP_ORG_ID,
	apiKey: env.REACT_APP_API_KEY,
});

export const openai = new OpenAIApi(configuration);
