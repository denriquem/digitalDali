import { Heading } from "@chakra-ui/react";
import ImageContainer from "./components/ImageContainer";
import ImageUpload from "./components/ImageUpload";

function App() {
	return (
		<>
			<Heading textAlign="center">Digital Dali</Heading>
			<ImageContainer />
			<ImageUpload />
		</>
	);
}

export default App;
