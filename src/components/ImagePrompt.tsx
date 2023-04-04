import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface ImagePromptProps {
	onSubmitPrompt: () => void;
	setInput: (input: string) => void;
	isDisabled: boolean;
}

const ImagePrompt = ({
	onSubmitPrompt,
	setInput,
	isDisabled,
}: ImagePromptProps) => {
	const handleChange = (event: any) => {
		setInput(event.target.value);
	};

	return (
		<InputGroup h={6} mt={8} ml={16} width="300px">
			<Input
				size="md"
				placeholder="What do you want to see...?"
				onChange={handleChange}
				w={64}
				fontWeight="bold"
				fontFamily="sans-serif"
			/>
			<InputRightElement maxW="200px" w="100px">
				<Button
					ml={8}
					size="md"
					onClick={onSubmitPrompt}
					isDisabled={isDisabled}
					maxW="200px"
					w="200px"
				>
					Create
				</Button>
			</InputRightElement>
		</InputGroup>
	);
};

export default ImagePrompt;
