import { z } from "zod";

export const blogSchema = z.object({
    title : z.string().min(5, { message: "Title must be at least 5 characters" }),
    content : z.string().min(10, { message: "Content must be at least 10 characters" }),
})