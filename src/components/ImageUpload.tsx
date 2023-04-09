import { useState } from "react";
import { Input } from "@chakra-ui/input";
import { createImageEdit } from "../api/createImageEdit";

const ImageUpload = () => {
	const [image, setImage] = useState({});

	const onImageUpload = (e: any) => {
		console.log(e.target.files[0]);
		const test = createImageEdit(e.target.files[0], "Salvador Dalí");
		console.log(test);

		setImage(e.target.files[0]);
	};

	return <Input type="file" accept="image/png" onChange={onImageUpload} />;
};

export default ImageUpload;
