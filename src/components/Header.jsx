import { FolderPen } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4 bg-linear-to-r from-gray-100 to-gray-200 shadow-md">
      <div className="flex flex-row gap-1 items-center">
        <h1 className="font-bold text-lg">feather</h1>
        <FolderPen className="h-4 w-4" />
      </div>
      <div className="flex flex-row gap-4">
        <h3 className="text-sm">Pricing</h3>
        <h3 className="text-sm">Showcase</h3>
        <h3 className="text-sm">Blog</h3>
        <h3 className="text-sm">Help Docs</h3>
      </div>
      <Button>
        <Link to={'/login'}>Get Started</Link>
      </Button>
    </div>
  );
};

export default Header;
