import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { Navigate } from "react-router-dom";
import { Loader, LoaderPinwheel } from "lucide-react";
import { useGetUserStore } from "../store/useGetUserStore";

const AuthRedirect = ({ children }) => {
  const { user, isLoading, fetchIfUserLogged } = useGetUserStore();

  useEffect(()=>{
    fetchIfUserLogged();
  },[]);
  //console.log(user)
  if(isLoading) return <div className="flex items-center justify-center h-screen"><Loader className="w-8 h-8 animate-spin"/></div>
  if (user) return <Navigate to={"/"} replace={true} />;
  return children;
};

export default AuthRedirect;