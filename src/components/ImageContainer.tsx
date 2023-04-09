import { useState } from "react";
import { createImage } from "../api/createImage";
import ImagePrompt from "./ImagePrompt";
import { Flex } from "@chakra-ui/layout";
import ImageRow from "./ImageRow";

import { useToast } from "@chakra-ui/react";
import { useImageStore } from "../store";

const ImageContainer = () => {
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { setNewImage, images } = useImageStore((state) => state);

	const toast = useToast();
	let isDisabled = input === "";

	const handleSubmitPrompt = async () => {
		setIsLoading(true);

		if (images.length >= 4) {
			toast({
				title: "The gallery is full",
				description:
					"Unfortunately you can only have a maximum of 4 images in the gallery",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			setIsLoading(false);
			return;
		}

		try {
			const newImage = await createImage(input);
			if (newImage) {
				setNewImage(newImage);
				console.log("done");
				setIsLoading(false);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Flex gap={24}>
			<ImagePrompt
				onSubmitPrompt={handleSubmitPrompt}
				setInput={setInput}
				isDisabled={isDisabled}
			/>
			<ImageRow images={images} isLoading={isLoading} />
		</Flex>
	);
};

export default ImageContainer;
