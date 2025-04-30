import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

// import { zodResolver } from '@hookform/resolvers/zod'

const SignUp = () => {

    const navigate = useNavigate();

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
      name: "",
      email: "",
      password: "",
      role : "USER",
    },
  });


  const {user, registerUser} = useUserStore();

  useEffect(() => {
    if (user) {
      navigate("/"); // redirect to homepage if logged in
    }
  }, [user, navigate]);
  
  const onSubmitHandler = async (data) => {
    console.log(data)
    await registerUser(data)
    console.log(user);
    reset();
    if (user) {
        <Navigate to="/" replace={true} />;
    }

}

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="lg:w-[40%] sm:w-[60%] w-[90%] max-h-[80vh] overflow-auto shadow-md">
        <CardHeader className="">
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="flex flex-col gap-2 items-start text-muted-foreground">
              <label
                className="font-bold text-xs text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <Input placeholder="jos buttler" {...register("name")} />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 items-start text-muted-foreground">
              <label
                className="font-bold text-xs text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <Input placeholder="jb@abc.com" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 items-start text-muted-foreground">
              <label
                className="font-bold text-xs text-gray-300"
                htmlFor="email"
              >
                Password
              </label>
              <Input
                placeholder="****"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <Select onValueChange={(value) => setValue("role", value)}>
                <label className="font-bold text-xs text-gray-300">Role</label>
                <SelectTrigger id='role' className="w-[50%]">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              disabled={false}
              type="submit"
              className="my-6 bg-blue-400 hover:bg-blue-600"
            >
              Login
            </Button>
            <p className="text-center text-sm text-gray-400">
              Don&apos;t have an account?
              <Link to="/login" className="text-blue-400">
                {" "}
                Sign In
              </Link>
            </p>
          </form>
          {/* <div className="flex items-center gap-4 w-full my-6">
                        <span className="flex-grow h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">or</span>
                        <span className="flex-grow h-px bg-gray-300" />
                    </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
