import { Box, Image as ImageBox, Spinner } from "@chakra-ui/react";

interface ImageProps {
	isLoading: boolean;
	imageUrl: string;
}

const Image = ({ isLoading, imageUrl }: ImageProps) => {
	return (
		<Box boxSize="xs" h="full" p={1}>
			{isLoading ? <Spinner /> : <ImageBox maxH="200px" src={imageUrl} />}
		</Box>
	);
};

export default Image;
