import { useState } from "react";
import HomePage from "./pages/home-page";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/create-blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ProtectedRoutes from "./protected/ProtectedRoutes";
import Blogs from "./pages/blogs";
import UserPage from "./pages/user-page";
import BlogsDashboard from "./pages/blogs-dashboard";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<ProtectedRoutes><Blogs /></ProtectedRoutes>} />
          <Route path="/create" element={<ProtectedRoutes><CreateBlog /></ProtectedRoutes>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/users/:id" element={<ProtectedRoutes><UserPage /></ProtectedRoutes>} />
          <Route path="/dashboard" element={<ProtectedRoutes><BlogsDashboard /></ProtectedRoutes>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
