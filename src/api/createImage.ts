import { openai } from "./config";

export const createImage = async (prompt: string) => {
	const response = await openai.createImage({
		prompt,
	});

	console.log(response);

	const ans = response.data.data[0].url;
	console.log(ans);
	return ans;
};
