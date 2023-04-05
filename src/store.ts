import { create } from "zustand";

type ImageStore = {
	images: any[];
	setNewImage: (imageUrl: string) => void;
};

const useImageStore = create<ImageStore>((set) => ({
	images: [],
	setNewImage: (imageUrl: string) => {
		set((state: any) => ({
			images: [...state.images, imageUrl],
		}));
	},
}));

export { useImageStore };
