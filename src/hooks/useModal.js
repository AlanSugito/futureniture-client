import { create } from "zustand";

const useModal = create((set) => ({
  showLogin: false,
  showRegister: false,
  showProductSlider: false,
  setShowProductSlider: (state) => set(() => ({ showProductSlider: state })),
  setShowLogin: (state) => set(() => ({ showLogin: state })),
  setShowRegister: (state) => set(() => ({ showRegister: state })),
}));

export default useModal;
