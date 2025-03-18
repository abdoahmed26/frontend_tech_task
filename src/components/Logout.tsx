"use client"
import { cookie } from "@/functions/axiosInstance"
import { ArrowLeftFromLine } from "lucide-react"

const Logout = () => {
    const handleLogout = () => {
        cookie.remove("token")
        window.location.assign("/login")
    }
    return (
        <button onClick={handleLogout} className="cursor-pointer flex justify-center items-center gap-2 text-white rounded-md bg-[#00acb4] hover:opacity-80 duration-300 p-2 px-3 outline-none">
            <ArrowLeftFromLine size={18} />
            Logout
        </button>
    )
}
export default Logout