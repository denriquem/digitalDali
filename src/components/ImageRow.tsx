import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import Image from "./Image";

interface ImageRowProps {
	images?: string[];
	isLoading?: boolean;
}

const ImageRow = ({ images, isLoading }: ImageRowProps) => {
	if (images) {
		console.log(images.length);
	}
	const imageList = images?.map((image, index) => {
		const showSpinner = isLoading && images.length === index + 1;
		return showSpinner ? (
			<Spinner />
		) : (
			<Image imageUrl={image} isLoading={false} />
		);
	});

	return (
		<Flex gap={8} mt={3}>
			{imageList}
		</Flex>
	);
};

export default ImageRow;
