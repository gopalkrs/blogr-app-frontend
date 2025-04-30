import React from "react";
import { useUserStore } from "../store/userStore";
import { Navigate } from "react-router-dom";
import { checkUserStore } from "../store/checkUserStore";
import { Loader, LoaderPinwheel } from "lucide-react";

const ProtectedRoutes = ({ children }) => {
  const { user, isLoading } = useUserStore();
  //console.log(user)
  if(isLoading) return <div className="flex items-center justify-center h-screen"><Loader className="w-8 h-8 animate-spin"/></div>
  if (!user) return <Navigate to={"/login"} replace={true} />;
  return children;
};

export default ProtectedRoutes;
