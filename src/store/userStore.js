import axios from "axios";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  isLoading: true,
  fetchIfUserLogged: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/logged`,
        { withCredentials: true }
      );
      //console.log(response.data);
      set({ user: response.data, isLoading: false });
    } catch (err) {
      console.log(err);
      set({ user: null, isLoading: false });
    }
  },
  loginUser: async (userData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users/login`,
      userData,
      { withCredentials: true }
    );
    console.log(response.data);
    set({ user: response.data.user, isLoading: false });
  },
  registerUser: async (userData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users/create`,
      userData,
      { withCredentials: true }
    );
    console.log(response.data);
    set({ user: response.data.user, isLoading: false });
  },
  logOutUser: () => {
    const response = axios.post(
      `${import.meta.env.VITE_API_URL}/users/logout`,
      {},
      { withCredentials: true }
    );
    console.log(response.data);
    set({ user: null, isLoading: false });
  },
  updateUser: (userdata) => {
    const response = axios.patch(
      `${import.meta.env.VITE_API_URL}/users/logged`,
      userdata,
      { withCredentials: true }
    );
    console.log(response.data);
    set({ isLoading: false });
  },
  clearUser: () => set({ user: null }),
}));
