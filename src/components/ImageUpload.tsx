import { useState } from "react";
import { Input } from "@chakra-ui/input";
import { uploadFile } from "../api/uploadFile";

const ImageUpload = () => {
	const [image, setImage] = useState({});

	const onImageUpload = (e: any) => {
		console.log(e.target.files);
		console.log(e.target.files[0]);
		uploadFile(e.target.files[0]);

		setImage(e.target.files[0]);
		console.log(image);
	};

	return <Input type="file" accept="image/*" onChange={onImageUpload} />;
};

export default ImageUpload;