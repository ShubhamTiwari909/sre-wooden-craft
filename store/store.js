import { create } from "zustand";

export const useStore = create((set) => ({
  id: 0,
  updateId: () => set((id) => ({ id })),
}));
