import { useState } from "react";
import { createImage } from "../api/createImage";
import ImagePrompt from "./ImagePrompt";
import Image from "./Image";
import { Flex } from "@chakra-ui/layout";
import ImageRow from "./ImageRow";

import { useImageStore } from "../store";

const ImageContainer = () => {
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { setNewImage, images } = useImageStore((state) => state);

	console.log(images);

	const isDisabled = input === "";

	const handleSubmitPrompt = async () => {
		setIsLoading(true);
		const newImage = await createImage(input);
		if (newImage) {
			setNewImage(newImage);
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
			<ImageRow images={images} />
		</Flex>
	);
};

export default ImageContainer;
