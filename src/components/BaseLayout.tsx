import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";

const BaseLayout = () => {
	return (
		<Grid
			bg="black"
			h="800px"
			templateRows="repeat(3, 1fr)"
			templateColumns="repeat(1, 1fr)"
			gap={4}
		>
			<GridItem colSpan={0} rowSpan={1} bg="purple.700" ml={8} mr={8} mt={8}>
				<Header />
			</GridItem>
			<GridItem
				colSpan={0}
				rowSpan={1}
				bg="purple.700"
				ml={8}
				mr={8}
				mb={4}
				mt={4}
			>
				<ImageContainer />
			</GridItem>
			<GridItem colSpan={0} rowSpan={1} bg="purple.700" ml={8} mr={8} mb={8} />
		</Grid>
	);
};

export default BaseLayout;
