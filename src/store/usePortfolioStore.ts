import { create } from "zustand";

interface PortfolioStore {
  isLoading: boolean;
  setLoading: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  cursorHovering: boolean;
  setCursorHovering: (val: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (val: boolean) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  isLoading: true,
  setLoading: (val) => set({ isLoading: val }),
  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),
  cursorHovering: false,
  setCursorHovering: (val) => set({ cursorHovering: val }),
  menuOpen: false,
  setMenuOpen: (val) => set({ menuOpen: val }),
}));
