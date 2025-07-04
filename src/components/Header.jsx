import {
  DollarSign,
  FolderPen,
  HelpCircle,
  LayoutDashboard,
  Lightbulb,
  Loader2,
  LogOut,
  User,
  User2Icon,
  UserRoundX,
  Zap,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
//import { useUserStore } from "../store/userStore";
import { useGetUserStore } from "../store/useGetUserStore";
import { useUserStore } from "../store/userStore";

const Header = () => {
  const { fetchIfUserLogged, isLoading, user } = useGetUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    fetchIfUserLogged();
  }, []);

  const { logOutUser } = useUserStore();
  const logoutUserHandler = async () => {
    await logOutUser();
    navigate("/");
    window.location.reload();
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between gap-1 items-center p-4 bg-[#f8f9fa]">
      <Link to={"/"} className="flex flex-row items-center">
        <Lightbulb className="h-4 w-4 text-gray-900" />
        <h1 className="text-md md:text-lg font-medium text-gray-900">bloggr</h1>
      </Link>
      <div>
      {user ? (
        <div className="flex flex-row gap-5 sm:gap-8 ">
          <div className="flex items-center">
            <DollarSign className="text-gray-500 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-gray-500 sm:block hidden">Pricing</h3>
          </div>
          <div className="flex items-center">
            <Link className="flex items-center" to={"/dashboard"}>
              <LayoutDashboard className="text-gray-500 h-4 w-4 inline sm:hidden" />
            </Link>
            <Link
              className="text-sm text-gray-500 sm:block hidden"
              to={"/dashboard"}
            >
              Dashboard
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-5 sm:gap-8 ">
          <div className="flex items-center">
            <DollarSign className="text-gray-500 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-gray-500 sm:block hidden">Pricing</h3>
          </div>
          <div className="flex items-center">
            <Zap className="text-gray-500 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-gray-500 sm:block hidden">Features</h3>
          </div>
          <div className="flex items-center">
            <LayoutDashboard className="text-gray-500 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-gray-500 sm:block hidden">
              Dashboard
            </h3>
          </div>
          <div className="flex items-center">
            <HelpCircle className="text-gray-500 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-gray-500 sm:block hidden">FAQ</h3>
          </div>
        </div>
      )}
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
                  <button onClick={logoutUserHandler} variant={"secondary"} className="bg-transparent font-light flex items-center gap-1">
                    <LogOut className="h-4 w-4" />
                    Signout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button>
              <Link to={"/register"}>SignUp</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
