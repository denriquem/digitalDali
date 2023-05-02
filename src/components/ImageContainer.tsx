import { useState } from "react";
import { createImage } from "../api/createImage";
import ImagePrompt from "./ImagePrompt";
import { Flex } from "@chakra-ui/layout";
import ImageRow from "./ImageRow";

import { Button, useToast } from "@chakra-ui/react";
import { useImageStore } from "../store";

const ImageContainer = () => {
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { setNewImage, images, setCarousel, carousel, resetImages } =
		useImageStore((state) => state);

	const toast = useToast();
	let isDisabled = input === "";

	console.log(carousel);

	const checkImageLength = () => {
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
	};

	const handleSubmitPrompt = async () => {
		setIsLoading(true);
		checkImageLength();

		try {
			const newImage = await createImage(input);
			if (newImage) {
				setNewImage(newImage);
				setIsLoading(false);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const addCarousel = () => {
		setCarousel(images);
		resetImages();
	};

	return (
		<Flex gap={24}>
			<ImagePrompt
				onSubmitPrompt={handleSubmitPrompt}
				setInput={setInput}
				isDisabled={isDisabled}
			/>
			<Button onClick={addCarousel}>Add Carousel</Button>
			<ImageRow images={images} isLoading={isLoading} />
		</Flex>
	);
};

export default ImageContainer;
