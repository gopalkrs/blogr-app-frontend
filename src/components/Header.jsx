import {
  BookOpen,
  Home,
  Loader2,
  LogOut,
  Mail,
  Menu,
  Pen,
  Search,
  User,
  User2Icon,
  X,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
//import { useUserStore } from "../store/userStore";
import { useGetUserStore } from "../store/useGetUserStore";
import { useUserStore } from "../store/userStore";

const Header = () => {
  const { fetchIfUserLogged, isLoading, user } = useGetUserStore();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    fetchIfUserLogged();
  }, []);

  useEffect(()=> {
    const handleClickOutside = (event) => {
      if(menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  } , []);
  

  const { logOutUser } = useUserStore();
  const logoutUserHandler = async () => {
    await logOutUser();
    navigate("/");
    setIsMobileMenuOpen(false);
    window.location.reload();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-orange-100 ">
      {/* Logo */}
      <div className="flex items-center justify-between w-full">
      <Link to={"/"} className="flex items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">bloggr</h1>
        </div>
      </Link>
      {/* Navigation */}
      <nav className="hidden moderate:flex space-x-8">
        <Link
          to={"/"}
          className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
        >
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link
          to={'/articles'}
          className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
        >
          <BookOpen size={18} />
          <span>Articles</span>
        </Link>
        <Link
          to={'/create'}
          className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
        >
          <Pen size={18} />
          <span>Write</span>
        </Link>
      </nav>

      {/* Desktop Search and Sign Up */}
      <div className="hidden moderate:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-orange-200 rounded-full bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-gray-900" />
        ) : (
          <div className="flex items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <User2Icon className="w-8 h-8 text-gray-50 bg-gray-800 rounded-full p-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-20">
                  <DropdownMenuItem>
                    <Link
                      to={`/users/${user?.id}`}
                      className="flex items-center gap-1"
                    >
                      <User className="h-4 w-4" />
                      User
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      onClick={logoutUserHandler}
                      variant={"secondary"}
                      className="bg-transparent font-light flex items-center gap-1"
                    >
                      <LogOut className="h-4 w-4" />
                      Signout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to={"/register"}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                SignUp
              </Link>
            )}
          </div>
        )}
      </div>
      <div ref={menuRef} className="moderate:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-orange-600 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>
      {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div ref={menuRef} className="moderate:hidden border-t absolute z-500 top-16 left-0 right-0 bg-white border-orange-100 px-2 py-4 space-y-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-orange-200 rounded-lg bg-white/70 focus:bg-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <nav className="space-y-2">
                <Link to={'/'} onClick={()=>setIsMobileMenuOpen(false)} className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors py-2">
                  <Home size={18} />
                  <span>Home</span>
                </Link>
                <Link to={'/articles'} onClick={()=>setIsMobileMenuOpen(false)} className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors py-2">
                  <BookOpen size={18} />
                  <span>Articles</span>
                </Link>
                <Link to={'/create'} onClick={()=>setIsMobileMenuOpen(false)} className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors py-2">
                  <Pen size={18} />
                  <span>Write</span>
                </Link>
                {user && (
                  <div>
                    <button
                      onClick={logoutUserHandler}
                      variant={"secondary"}
                      className="text-gray-700 hover:text-orange-600 transition-colors flex items-center space-x-2 py-2"
                    >
                      <LogOut size={18} />
                      <span>Signout</span>
                    </button>
                    <Link onClick={()=>setIsMobileMenuOpen(false)} to={`/users/${user?.id}`} className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors py-2">
                      <User size={18} />
                      <span>Profile</span>
                    </Link>
                  </div>
                )}
              </nav>
              <Link to={'/register'} >
              <button onClick={()=>setIsMobileMenuOpen(false)} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-md">
                Sign Up
              </button>
              </Link>
            </div>
          )}
    </div>
  );
};

export default Header;
