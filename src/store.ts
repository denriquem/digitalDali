import { create } from "zustand";

type ImageStore = {
	images: any[];
	carousel: any[];
	setNewImage: (imageUrl: string) => void;
	resetImages: () => void;
	setCarousel: (newCarousel: string[]) => void;
};

const useImageStore = create<ImageStore>((set) => ({
	images: [],
	carousel: [],
	setNewImage: (imageUrl: string) => {
		set((state: any) => ({
			images: [...state.images, { imageUrl }],
		}));
	},
	resetImages: () => {
		set(() => ({
			images: [],
		}));
	},
	setCarousel: (newCarousel: string[]) => {
		set((state) => ({
			carousel: [...state.carousel, newCarousel],
		}));
	},
}));

export { useImageStore };
