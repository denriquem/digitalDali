import { Flex } from "@chakra-ui/layout";
import Image from "./Image";

interface ImageRowProps {
	images?: any;
	isLoading: boolean;
}

const ImageRow = ({ images, isLoading }: ImageRowProps) => {
	const imageList = images?.map((image: any) => {
		return <Image imageUrl={image.imageUrl} isLoading={isLoading} />;
	});

	return (
		<Flex gap={4} my={2} width="full" h="full" mr={8}>
			{imageList}
		</Flex>
	);
};

export default ImageRow;
