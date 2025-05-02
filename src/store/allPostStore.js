import axios from "axios";
import { create } from "zustand";

export const allPostStore = create((set) => ({
  posts: null,
  isLoading: true,
  getAllPostsCreated: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/all-posts`,
        { withCredentials: true }
      );
        console.log(response.data.posts[0]);
      set({ posts: response.data.posts, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ posts: null, isLoading: false });
    }
  },
}))