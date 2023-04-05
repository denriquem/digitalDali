import { Flex, List } from "@chakra-ui/layout";
import Image from "./Image";

interface ImageRowProps {
	images?: string[];
}

const ImageRow = ({ images }: ImageRowProps) => {
	const imageList = images?.map((image) => {
		return <Image imageUrl={image} isLoading={false} />;
	});

	return (
		<Flex gap={8} mt={3}>
			{imageList}
		</Flex>
	);
};

export default ImageRow;
