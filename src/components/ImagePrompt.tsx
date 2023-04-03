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
		<>
			<InputGroup mt={10} ml={60}>
				<Input
					size="md"
					placeholder="What do you want to see...?"
					onChange={handleChange}
					w={80}
				/>
				<InputRightElement h="full" width="4.5rem" left="72">
					<Button
						h="full"
						size="sm"
						onClick={onSubmitPrompt}
						isDisabled={isDisabled}
					>
						Test
					</Button>
				</InputRightElement>
			</InputGroup>
		</>
	);
};

export default ImagePrompt;
