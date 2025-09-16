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
      category: ""
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
      className="flex flex-col items-center justify-center min-h-screen p-4"
    >
      <div className="space-y-10">
        {/* <h2 className="text-center text-xl font-bold">Create New Blog</h2> */}
        <div className="flex flex-col gap-2">
          <ImageUploader setValue={setValue} />
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="flex flex-col gap-2 items-start text-muted-foreground">
              {/* <label
                className="font-bold text-xs text-gray-300"
                htmlFor="title"
              >
                Title
              </label> */}

              <input className="p-1 bg-gray-50 outline-none w-full" placeholder="Title" {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>
            <Select onValueChange={(value) => setValue("category", value)}>
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
                <SelectItem value="international">International Affairs</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-col gap-2 text-muted-foreground">
              {/* <label
                className="font-bold text-xs text-gray-300"
                htmlFor="content"
              >
                Content
              </label> */}
              <TiptapEditor content={content} onChange={onChangeHandler} />
              {errors.content && (
                <p className="text-red-500 text-xs">{errors.content.message}</p>
              )}
            </div>
            <Button
              disabled={false}
              type="submit"
              className="my-6 bg-blue-300 bg-blue-300 text-gray-50 p-1 rounded shadow-xl hover:bg-blue-400"
            >
              Post
            </Button>
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
