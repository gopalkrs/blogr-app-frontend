import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
  import { useForm } from 'react-hook-form'
  import { Input } from "@/components/ui/input"
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../../store/userStore'

// import { zodResolver } from '@hookform/resolvers/zod'
  

const SignIn = () => {

    const {user, loginUser} = useUserStore();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
          navigate("/"); // redirect to homepage if logged in
        }
      }, [user, navigate]);
      

    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({
        // resolver: zodResolver(login),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmitHandler = async (data) => {
        console.log(data)
        await loginUser(data)
        //console.log(user);
    }

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>

            <Card className='lg:w-[40%] sm:w-[60%] w-[90%] max-h-[80vh] overflow-auto shadow-md'>
                <CardHeader className=''>
                    <CardTitle className='text-center'>Sign-In</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className='flex flex-col gap-2 items-start text-muted-foreground'>
                            <label className='font-bold text-xs text-gray-300' htmlFor="email">Email</label>
                            <Input
                                placeholder="jdoe@abc.com"
                                {...register("email")}
                            />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                        </div>
                        <div className='flex flex-col gap-2 items-start text-muted-foreground'>
                            <label className='font-bold text-xs text-gray-300' htmlFor="email">Password</label>
                            <Input
                                placeholder="****"
                                type='password'
                                {...register("password")}
                            />
                            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                        </div>
                        <Button disabled={false} type='submit' className='my-6 bg-blue-400 hover:bg-blue-600'>Login</Button>
                        <p className='text-center text-sm text-gray-400'>
                            Don&apos;t have an account?
                            <Link to='/register' className='text-blue-400'> Sign Up</Link>
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
  )
}

export default SignIn