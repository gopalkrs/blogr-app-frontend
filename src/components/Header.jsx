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
import { Link } from "react-router-dom";
//import { useUserStore } from "../store/userStore";
import { useGetUserStore } from "../store/useGetUserStore";
import { useUserStore } from "../store/userStore";

const Header = () => {
  const { fetchIfUserLogged, isLoading, user } = useGetUserStore();

  useEffect(() => {
    fetchIfUserLogged();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between gap-1 items-center p-4 bg-black shadow-md">
      <Link to={"/"} className="flex flex-row items-center">
        <Lightbulb className="h-4 w-4 text-white" />
        <h1 className="text-md md:text-lg font-medium text-amber-50">bloggr</h1>
      </Link>
      {user ? (
        <div className="flex flex-row gap-5 sm:gap-8 ">
          <div className="flex items-center">
            <DollarSign className="text-amber-100 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-amber-100 sm:block hidden">Pricing</h3>
          </div>
          <div className="flex items-center">
            <Link to={"/dashboard"}>
              <LayoutDashboard className="text-amber-100 h-4 w-4 inline sm:hidden" />
            </Link>
            <Link
              className="text-sm text-amber-100 sm:block hidden"
              to={"/dashboard"}
            >
              Dashboard
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-5 sm:gap-8 ">
          <div className="flex items-center">
            <DollarSign className="text-amber-100 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-amber-100 sm:block hidden">Pricing</h3>
          </div>
          <div className="flex items-center">
            <Zap className="text-amber-100 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-amber-100 sm:block hidden">Features</h3>
          </div>
          <div className="flex items-center">
            <LayoutDashboard className="text-amber-100 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-amber-100 sm:block hidden">
              Dashboard
            </h3>
          </div>
          <div className="flex items-center">
            <HelpCircle className="text-amber-100 h-4 w-4 inline sm:hidden" />
            <h3 className="text-sm text-amber-100 sm:block hidden">FAQ</h3>
          </div>
        </div>
      )}

      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin text-gray-900" />
      ) : (
        <div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <User2Icon className="w-5 h-5 text-amber-50" />
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
                <DropdownMenuItem className="flex items-center gap-1">
                  <LogOut className="h-4 w-4" />
                  Signout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button>
              <Link to={"/login"}>SignUp</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
