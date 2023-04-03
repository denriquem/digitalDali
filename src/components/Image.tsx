import { Box, Image as ImageBox, Spinner } from "@chakra-ui/react";

interface ImageProps {
	isLoading: boolean;
	imageUrl: string;
}

const Image = ({ isLoading, imageUrl }: ImageProps) => {
	return (
		<Box boxSize="sm" mt={20} ml={60}>
			{isLoading ? <Spinner /> : <ImageBox src={imageUrl} />}
		</Box>
	);
};

export default Image;
