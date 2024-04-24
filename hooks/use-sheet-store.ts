import { create } from "zustand";

interface SheetStore {
	open: boolean;
	toggleSheet: () => void;
}

export const useSheet = create<SheetStore>((set) => ({
	open: false,
	toggleSheet: () => set((state) => ({ open: !state.open })),
}));
