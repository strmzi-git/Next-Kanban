import { create } from "zustand";

interface ShowSideBarProps {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const ShowSideBarHook = create<ShowSideBarProps>((set) => ({
  isOpen: true,
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));
