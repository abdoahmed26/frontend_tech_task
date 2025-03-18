"use client"
import Spinner from "@/components/Spinner"
import { login } from "@/functions/login"
import { loginDataType } from "@/types"
import { useState } from "react"
import { useForm } from "react-hook-form"

const LoginForm = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm<loginDataType>()
    const [loading,setLoading] = useState<boolean>(false)
    const onSubmit = (data:loginDataType) => {
        setLoading(true)
        login(data,setLoading)
    }
    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                    <label htmlFor="email">Email : </label><br />
                    <input type="email" {...register("email",{required:true})} id="email" name="email" placeholder="Enter your email" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.email?.type ==="required" && <p className="text-red-500 text-sm">Email is required</p>}
                </div>
                <div className="mt-3">
                    <label htmlFor="password">Password : </label><br />
                    <input type="password" {...register("password",{required:true})} id="password" name="password" placeholder="Enter your password" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.password?.type ==="required" && <p className="text-red-500 text-sm">Password is required</p>}
                </div>
                <button disabled={loading} className="w-full cursor-pointer text-white mt-4 rounded-md bg-[#00acb4] p-2 outline-none ">
                    {
                        loading ?
                        <Spinner />
                        :"Let's Go"
                    }
                </button>
            </form>
        </div>
    )
}
export default LoginForm