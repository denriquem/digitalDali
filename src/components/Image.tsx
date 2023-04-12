import { Image as ImageBox, Spinner } from "@chakra-ui/react";

interface ImageProps {
	isLoading: boolean;
	imageUrl: string;
}

const Image = ({ isLoading, imageUrl }: ImageProps) => {
	return isLoading ? (
		<Spinner />
	) : (
		<ImageBox
			maxH="200px"
			h="80%"
			width="90%"
			minW="20%"
			src={imageUrl}
			_hover={{
				boxShadow: "0px 0px 0px 4px rgb(49,130,206)",
				transform: "scale(1.025)",
				transitionDuration: "0.5s",
			}}
		/>
	);
};

export default Image;
