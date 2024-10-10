import { create } from "zustand";

export const useStatusStore = create((set) => ({
  status: "Essai",
  updateStatus: (status) => set(() => ({ status: status })),
}));
