"use client"
import { useForm } from "react-hook-form"
import Spinner from "./Spinner"
import { useState } from "react"
import { registerFun } from "@/functions/register"
import { registerDataType } from "@/types"

const RegisterForm = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm<registerDataType>()
    const [loading,setLoading] = useState<boolean>(false)
    const onSubmit = (data:registerDataType) => {
        setLoading(true)
        registerFun(data,setLoading)
    }
    return(
        <div className="mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                    <label htmlFor="name">Name : </label><br />
                    <input type="text" {...register("name",{required:true})} id="name" name="name" placeholder="Enter your name" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.name?.type ==="required" && <p className="text-red-500 text-sm">Name is required</p>}
                </div>
                <div className="mt-3">
                    <label htmlFor="email">Email : </label><br />
                    <input type="email" {...register("email",{required:true})} id="email" name="email" placeholder="Enter your email" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.email?.type ==="required" && <p className="text-red-500 text-sm">Email is required</p>}
                </div>
                <div className="mt-3">
                    <label htmlFor="password">Password : </label><br />
                    <input type="password" {...register("password",{required:true,minLength:6,maxLength:12})} id="password" name="password" placeholder="Enter your password" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.password?.type ==="required" && <p className="text-red-500 text-sm">Password is required</p>}
                    {errors.password?.type ==="minLength" && <p className="text-red-500 text-sm">Password must be at least 6 characters</p>}
                    {errors.password?.type ==="maxLength" && <p className="text-red-500 text-sm">Password must be at most 12 characters</p>}
                </div>
                <button disabled={loading} className="w-full cursor-pointer text-white mt-4 rounded-md bg-[#00acb4] p-2 outline-none ">
                    {
                        loading ?
                            <Spinner />
                        :"Register"
                    }
                </button>
            </form>
        </div>
    )
}
export default RegisterForm