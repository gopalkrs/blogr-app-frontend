import { Pencil, UserCircle } from "lucide-react";
import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

const UserProfile = ({ user }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(login),
    defaultValues: {
      name: user?.user.name,
      role: "user",
    },
  });

  const { updateUser } = useUserStore();

  const updateUserHandler = (userdata) => {
    updateUser(userdata);
    window.location.reload();
  };

  return (
    <div className="flex flex-row justify-between items-center bg-amber-50 p-5 rounded-md shadow-md">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full w-10 h-10 uppercase bg-black text-amber-50 flex items-center justify-center font-bold text-center">
            {user?.user.name.charAt(0)}
          </div>
          <span className={`${user?.user.role === "admin"? "bg-red-400": "bg-amber-300"} text-white rounded-full flex items-center justify-center text-center text-xs px-2`}>
            {user?.user.role}
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-sm sm:text-md">{user?.user.name}</h3>
          {/*  */}
          <p className="text-gray-500 text-xs sm:text-sm">{user?.user.email}</p>
        </div>
      </div>
      <div>
        <Dialog>
          <DialogTrigger className="flex flex-row text-sm items-center rounded-full gap-1 px-2 py-1 bg-blue-500 text-white">
            <Pencil className="sm:h-4 sm:w-4 h-3 w-3" />
            Edit
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit(updateUserHandler)}>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="items-center gap-4">
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="col-span-3"
                    {...register("name")}
                  />
                </div>
                <div className="items-center gap-4">
                  <Select onValueChange={(value) => setValue("role", value)}>
                    <SelectTrigger id="role" className="w-full">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        {/* <Button
          onClick={updateUserHandler}
          className="px-1 h-8 py-1 text-xs sm:text-sm rounded-full "
          variant={"outline"}
        >
          <Pencil className="sm:h-4 sm:w-4 h-3 w-3" />
          Edit
        </Button> */}
      </div>
    </div>
  );
};

export default UserProfile;
