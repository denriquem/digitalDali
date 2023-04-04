import { openai } from "./config";

export const uploadFile = async (file: any) => {
	console.log(file);
	const response = await openai.createFile(file, "fine-tuning");
	console.log(response);
	console.log("done??");
	return response;
};
