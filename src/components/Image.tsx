import { useState } from "react";
import { Image as ImageBox, Spinner } from "@chakra-ui/react";
import PreviewModal from "./PreviewModal";

interface ImageProps {
	isLoading: boolean;
	imageUrl: string;
}

const Image = ({ isLoading, imageUrl }: ImageProps) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	if (showModal) {
		return (
			<PreviewModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				imageUrl={imageUrl}
			/>
		);
	}

	return isLoading ? (
		<Spinner />
	) : (
		<ImageBox
			maxH="200px"
			h="80%"
			maxW="200px"
			minW="20%"
			src={imageUrl}
			onClick={handleClick}
			_hover={{
				boxShadow: "0px 0px 0px 4px rgb(49,130,206)",
				transform: "scale(1.025)",
				transitionDuration: "0.5s",
			}}
		/>
	);
};

export default Image;
