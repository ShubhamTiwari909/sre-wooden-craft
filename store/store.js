import { create } from "zustand";

export const useStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
  userProfile: null,
  setUserProfile: (userProfile) => set(() => ({ userProfile })),
}));
