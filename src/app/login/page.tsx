"use client"
import LoginForm from "@/components/LoginForm"
import Link from "next/link"

const Login = () => {
    return (
        <div className="bg-slate-200 min-h-screen">
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-2xl">Welcome!</h1>
                <div className="container flex justify-center">
                    <div className="w-[450px] bg-white p-3 rounded-md px-4">
                        <LoginForm />
                        <div className="mt-3 flex justify-between">
                            <p>New User ? <Link href={"/register"} className="font-bold hover:text-[#00acb4] duration-300">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login