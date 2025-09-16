import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DOMPurify from "dompurify";
import { Delete, ShieldUser, User, UserLock, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import FeaturedPostCard from "./posts-card/FeaturedPostCard";


const RecentPostSlider = ({ post }) => { 

  return (
          <motion.div
            className="flex justify-center py-2 items-center bg-slate-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <FeaturedPostCard post={post} />
          </motion.div>
  );
};

export default RecentPostSlider;
