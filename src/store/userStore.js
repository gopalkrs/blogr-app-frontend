import axios from "axios";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  isLoading : true,
  loginUser: async (userData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, userData);
    console.log(response.data);
    set({ user : response.data });
    set({ isLoading : false });
},
registerUser: async (userData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/create`, userData);
    console.log(response.data);
    set({ user : response.data });
    set({ isLoading : false });
},
  clearUser: () => set({ user: null }),
}));