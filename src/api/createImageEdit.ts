import { openai } from "./config";

export const createImageEdit = async (file: any, prompt: string) => {
	console.log("heloo??");
	try {
		const response = await openai.createImageEdit(file, prompt);
		console.log(response);

		const ans = response.data.data[0].url;
		console.log(ans);
		return ans;
	} catch (err) {
		console.log(err);
	}
};
