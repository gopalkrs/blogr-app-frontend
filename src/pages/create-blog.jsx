import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { usePostStore } from "../store/postsStore";
import { useGetUserStore } from "../store/useGetUserStore";
import TiptapEditor from "../components/TiptapEditor";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "../validations/blogSchema";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";
import ImageUploader from "../components/ImageUploader";

const CreateBlog = () => {
  const navigate = useNavigate();

  const categories = [
    "Technology",
    "Lifestyle",
    "Business",
    "Health",
    "Travel",
    "Food",
    "Sports",
    "Finance",
    "Career",
    "Environment",
    "Others"
  ];
  const [content, setContent] = useState("");
  const onChangeHandler = (html) => {
    setContent(html);
    setValue("content", html);
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    //resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: "",
      category: "",
    },
  });

  const { createNewPost } = usePostStore();
  const { user, fetchIfUserLogged } = useGetUserStore();
  useEffect(() => {
    fetchIfUserLogged();
  }, []);

  const onSubmitHandler = async (data) => {
    console.log(data);
    try {
      const response = await createNewPost(data);
      console.log(response);

      if (response?.success) {
        toast.success("Post created successfully");
        reset();
        setValue("content", "");
        setContent("");

        setTimeout(() => {
          navigate("/articles");
        }, 300);
      } else {
        toast.error("Error creating post");
        setValue("content", "");
        setContent("");
      }
    } catch (err) {
      console.error("Error: ", err);
      toast.error("Something went wrong");
    }
    reset();
  };

  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen"
    >
      <div className="space-y-10">
        {/* <h2 className="text-center text-xl font-bold">Create New Blog</h2> */}
        <div className="flex flex-col gap-2">
          <ImageUploader setValue={setValue} />
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-orange-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white/80 text-lg"
                    placeholder="Title"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs">
                      {errors.title.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-orange-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    onChange={(e) => setValue("category", e.target.value)}
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white/80"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {/* <Select className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white/80" onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger className="w-[200px] bg-gray-50">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="news">National News</SelectItem>
                <SelectItem value="international">
                  International Affairs
                </SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select> */}
                  {errors.title && (
                    <p className="text-red-500 text-xs">
                      {errors.title.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-muted-foreground">
              {/* <label
                className="font-bold text-xs text-gray-300"
                htmlFor="content"
              >
                Content
              </label> */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100">
                <div className="p-4 border-b border-orange-100">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Content *
                  </label>
                  <TiptapEditor content={content} onChange={onChangeHandler} />
                  {errors.content && (
                    <p className="text-red-500 text-xs">
                      {errors.content.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button
                type="submit"
                className="space-x-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
              >
                Publish
              </button>
          </form>
        </div>
      </div>

      <div className="my-6 flex flex-col items-center text-center">
        <p className="text-sm text-gray-600">
          Want to see your blogs posts?
          <Button className="text-blue-500 font-medium px-2" variant={"link"}>
            <Link to={`/users/${user?.id}`}>Click here</Link>
          </Button>
          to view.
        </p>
      </div>
    </motion.div>
  );
};

export default CreateBlog;
