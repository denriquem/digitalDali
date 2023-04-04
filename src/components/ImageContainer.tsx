import { useState } from "react";
import { createImage } from "../api/createImage";
import ImagePrompt from "./ImagePrompt";
import Image from "./Image";
import { Flex } from "@chakra-ui/layout";

const ImageContainer = () => {
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const isDisabled = input === "";

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
		<Flex gap={24}>
			<ImagePrompt
				onSubmitPrompt={handleSubmitPrompt}
				setInput={setInput}
				isDisabled={isDisabled}
			/>
			<Image isLoading={isLoading} imageUrl={imageUrl} />
		</Flex>
	);
};

export default ImageContainer;
