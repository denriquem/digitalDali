import { Image as ImageBox, Spinner } from "@chakra-ui/react";

interface ImageProps {
	isLoading: boolean;
	imageUrl: string;
}

const Image = ({ isLoading, imageUrl }: ImageProps) => {
	return isLoading ? <Spinner /> : <ImageBox maxH="200px" src={imageUrl} />;
};

export default Image;
