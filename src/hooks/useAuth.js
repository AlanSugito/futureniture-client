import { create } from "zustand";

const useAuthStore = create((set) => ({
  credentials: {
    accToken: "",
    id: "",
  },
  setAccToken: (token) =>
    set((state) => ({
      credentials: { ...state.credentials, accToken: token },
    })),
}));

export default useAuthStore;
