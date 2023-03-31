import { useState } from "react";
import { createImage } from "../api/createImage";
import ImagePrompt from "./ImagePrompt";
import Image from "./Image";

const ImageContainer = () => {
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitPrompt = async () => {
		setIsLoading(true);
		const newImage = await createImage(input);
		if (newImage) {
			setImageUrl(newImage);
			console.log("done");
			setIsLoading(false);
		}
	};

	return (
		<>
			<ImagePrompt onSubmitPrompt={handleSubmitPrompt} setInput={setInput} />
			<Image isLoading={isLoading} imageUrl={imageUrl} />
		</>
	);
};

export default ImageContainer;
