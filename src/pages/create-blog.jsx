import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { usePostStore } from "../store/postsStore";
import { useGetUserStore } from "../store/useGetUserStore";
import TiptapEditor from "../components/TiptapEditor";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "../validations/blogSchema";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";

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
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { createNewPost } = usePostStore();
  const { user, fetchIfUserLogged, isLoading } = useGetUserStore();
  useEffect(() => {
    fetchIfUserLogged();
  }, []);

  const onSubmitHandler = async (data) => {
    const response = await createNewPost(data);
    console.log(response);

    if (response?.success) {
      toast.success("Post created successfully");
      reset();
      setValue("content", "");
      setContent("");

      setTimeout(() => {
        navigate("/dashboard");
      }, 300);
    } else {
      toast.error("Error creating post");
      setValue("content", "");
      setContent("");
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
      <Card className="lg:w-[40%] sm:w-[60%] w-[90%] max-h-[80vh] overflow-auto shadow-md">
        <CardHeader className="">
          <CardTitle className="text-center">Create new blog</CardTitle>
        </CardHeader>
        <CardContent>
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
              <Input placeholder="Title" {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>

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
              className="my-6 bg-gray-800 hover:bg-gray-600"
            >
              Post
            </Button>
          </form>
        </CardContent>
      </Card>

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
