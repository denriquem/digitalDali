import { useState } from "react";
import {
	Button,
	Box,
	Image,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

interface PreviewModalProps {
	imageUrl: string;
	isOpen: boolean;
	onClose: () => void;
}

const PreviewModal = ({ isOpen, onClose, imageUrl }: PreviewModalProps) => {
	const [title, setTitle] = useState("");
	const [titleSaved, setTitleSaved] = useState(false);

	console.log(title);

	const handleChange = (event: any) => {
		setTitle(event.target.value);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					{titleSaved && <Box>{title}</Box>}
					{!titleSaved && (
						<Input placeholder="Add a title" onChange={handleChange} />
					)}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Image src={imageUrl} />
				</ModalBody>

				<ModalFooter>
					<Button variant="ghost" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button colorScheme="blue" onClick={() => setTitleSaved(true)}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default PreviewModal;
