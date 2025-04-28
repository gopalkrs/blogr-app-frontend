import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-3xl font-bold max-w-md text-center">
          Create your blogs with feather{" "}
          <span className="text-gray-400 bg-clip-text">in minutes</span>
        </h1>
        <p className="m-2 text-sm text-muted-foreground">
          Create, share, and inspire — your blog, your voice, your community.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
