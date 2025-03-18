"use client"
import RegisterForm from "@/components/RgisterForm";
import Link from "next/link"

const Register = () => {
    return (
        <div className="bg-slate-200 min-h-screen">
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-2xl">Welcome!</h1>
                <div className="container flex justify-center">
                    <div className="w-[450px] bg-white p-3 rounded-md px-4">
                        <RegisterForm />
                        <div className="mt-3 flex justify-between">
                            <p>Already have an account ? <Link href={"/login"} className="font-bold hover:text-[#00acb4] duration-300">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register