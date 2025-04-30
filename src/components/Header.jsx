import {
  DollarSign,
  FolderPen,
  HelpCircle,
  LayoutDashboard,
  Lightbulb,
  Loader2,
  Zap,
} from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
//import { useUserStore } from "../store/userStore";
import { checkUserStore } from "../store/checkUserStore";
import { useUserStore } from "../store/userStore";

const Header = () => {
  const { fetchIfUserLogged, isLoading, user } = useUserStore();

  useEffect(() => {
    fetchIfUserLogged();
  }, []);

  return (
    <div className="flex flex-row justify-between gap-1 items-center p-4 bg-black shadow-md">
      <Link to={'/'} className="flex flex-row items-center">
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
          <Link to={'/blogs'}><LayoutDashboard className="text-amber-100 h-4 w-4 inline sm:hidden" /></Link>
            <h3 className="text-sm text-amber-100 sm:block hidden">
              <Link to={'/blogs'}>Dashboard</Link>
            </h3>
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
        <Button>
          <Link to={"/login"}>{user ? "hey" : "Sign In"}</Link>
        </Button>
      )}
    </div>
  );
};

export default Header;
