import { openai } from "./config";

export const createImage = async (prompt: string) => {
	const response2 = await openai.createImage({
		prompt,
	});

	console.log(response2);

	const ans = response2.data.data[0].url;
	console.log(ans);
	return ans;
};
