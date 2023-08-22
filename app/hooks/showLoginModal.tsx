import { create } from "zustand";

interface ShowLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const showLoginModalHook = create<ShowLoginModalProps>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
