import axios from "axios";
import { create } from "zustand";

export const useGetBlogAuthorStore = create((set) => ({
  authorData: null,
  isLoadingAuthorData: true,
  getAuthorWithId: async (authorId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/author/${authorId}`
      );
      set({ authorData: response?.data.user, isLoadingAuthorData: false });
    } catch (err) {
      console.error(err);
      set({ authorData: null, isLoadingAuthorData: false });
    }
  },
  clearAuthorData: () => set({authorData: null})
}));
