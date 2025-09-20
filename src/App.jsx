import { useState } from "react";
import HomePage from "./pages/home-page";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/create-blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ProtectedRoutes from "./protected/ProtectedRoutes";
import Blogs from "./pages/blog-page";
import UserPage from "./pages/user-page";
import AuthRedirect from "./protected/AuthRedirect";
import BlogPage from "./pages/blog-page";
import { Toaster } from "sonner";
import 'sonner';
import ArticlesListPage from "./pages/ArticlesListPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:id" element={<ProtectedRoutes><BlogPage /></ProtectedRoutes>} />
          <Route path="/create" element={<ProtectedRoutes><CreateBlog /></ProtectedRoutes>} />
          <Route path="/login" element={<AuthRedirect><SignIn /></AuthRedirect>} />
          <Route path="/register" element={<AuthRedirect><SignUp /></AuthRedirect>} />
          <Route path="/users/:id" element={<ProtectedRoutes><UserPage /></ProtectedRoutes>} />
          <Route path="/articles" element={<ProtectedRoutes><ArticlesListPage /></ProtectedRoutes>} />
        </Routes>
        <Toaster richColors />
        <Footer />
      </div>
    </>
  );
}

export default App;
