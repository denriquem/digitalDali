import { Heading } from "@chakra-ui/layout";

const Header = () => {
	return (
		<>
			<Heading
				size="xl"
				color="whiteAlpha.900"
				fontWeight="bold"
				fontFamily="sans-serif"
				mt={8}
				ml={8}
			>
				Dancing Sushi
			</Heading>
			<Heading ml={12}>A descent into the abyss</Heading>
			<Heading ml={16}>of our collective subconscience</Heading>
		</>
	);
};

export default Header;
