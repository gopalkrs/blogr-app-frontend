

import axios from "axios";
import { create } from "zustand";

export const useGetMostLikedPosts = create((set) => ({
  featuredPosts: null,
  isLoadingFeaturedPost: true,
  getFeaturedPosts: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/most-liked`
      );
      //console.log(response.data.posts)
      set({ featuredPosts: response?.data.posts, isLoadingFeaturedPost: false });
    } catch (err) {
      console.error(err);
      set({ featuredPosts: null, isLoadingFeaturedPost: false });
    }
  },
}));

export const useGetMostRecentPosts = create((set) => ({
  recentPosts: null,
  isLoadingRecentPosts: true,
  getMostRecentPosts: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/most-recent`
      );
      //console.log(response.data.posts)
      set({ recentPosts: response?.data.posts, isLoadingRecentPosts: false });
    } catch (err) {
      console.error(err);
      set({ recentPosts: null, isLoadingRecentPosts: false });
    }
  },
}));
