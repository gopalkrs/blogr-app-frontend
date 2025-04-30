import axios from "axios";
import { create } from "zustand";

export const checkUserStore = create((set) => ({
  user: null,
  isLoading: true,
  fetchIfUserLogged: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/logged`,
        { withCredentials: true }
      );
    //   console.log(response);
      set({ user: response.data, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ user: null, isLoading: false });
    }
  },
}))