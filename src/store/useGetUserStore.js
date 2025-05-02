import axios from "axios";
import { create } from "zustand";

export const useGetUserStore = create((set) => ({
  user: null,
  isLoading: true,
  fetchIfUserLogged: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/logged`,
        { withCredentials: true }
      );
      //console.log(response.data);
      set({ user: response.data.user, isLoading: false });
    } catch (err) {
      console.log(err);
      set({ user: null, isLoading: false });
    }
  },
}))