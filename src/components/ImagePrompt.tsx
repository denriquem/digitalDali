import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface ImagePromptProps {
	onSubmitPrompt: () => void;
	setInput: (input: string) => void;
}

const ImagePrompt = ({ onSubmitPrompt, setInput }: ImagePromptProps) => {
	const handleChange = (event: any) => {
		setInput(event.target.value);
	};

	return (
		<>
			<InputGroup mt={10}>
				<Input
					size="md"
					placeholder="image prompt"
					onChange={handleChange}
					w="50%"
				/>
				<InputRightElement h="full" width="4.5rem" mr="auto">
					<Button h="1.75rem" size="sm" onClick={onSubmitPrompt}>
						Test
					</Button>
				</InputRightElement>
			</InputGroup>
		</>
	);
};

export default ImagePrompt;
