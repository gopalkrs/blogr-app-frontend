import axios from "axios";
import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],
  isLoading: true,
  createNewPost: async (postData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts/create`,
        postData,
        { withCredentials: true }
      );
      //console.log(response.data);
      set({ isLoading: false });
    } catch (err) {
      console.error(err);
      set({ posts: null, isLoading: false });
    }
  },
  getAllPost: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/`,
        { withCredentials: true }
      );
      console.log(response.data);
      set({ posts: response.data.posts, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ posts: null, isLoading: false });
    }
  },
  getPostWithId: async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/${id}`,
        { withCredentials: true }
      );
      console.log(response.data.posts[0].user[0]);
      set({ posts: response.data.posts[0], isLoading: false });
    } catch (err) {
      console.error(err);
      set({ posts: null, isLoading: false });
    }
  },
  deletePostWithId: async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/posts/${id}`,
        { withCredentials: true }
      );
      console.log(response.data);
      set({ posts: response.data.posts, isLoading: false });
      window.location.reload();
    } catch (err) {
      console.error(err);
      set({ isLoading: false });
    }
  },

}));
