import { openai } from "./config";

export const createImage = async (file: any, prompt: string) => {
	const response = await openai.createImageEdit(file, prompt);
	console.log(response);

	const ans = response.data.data[0].url;
	console.log(ans);
	return ans;
};
