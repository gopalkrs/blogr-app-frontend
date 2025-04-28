import { useState } from "react";
import HomePage from "./pages/home-page";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/create-blog";
import BlogDashboard from "./pages/blog-dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/get-started/SignIn";
import SignUp from "./components/get-started/SignUp";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDashboard />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
