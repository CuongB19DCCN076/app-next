import { create } from "zustand";

export interface IProState {
  isOpen: boolean;
  handleOpenOrCloseProModal: () => void;
  handleCloseProModal: () => void;
}

export const useProStore = create<IProState>()((set) => ({
  isOpen: false,
  handleOpenOrCloseProModal: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleCloseProModal: () => set((state) => ({ ...state, isOpen: false })),
}));