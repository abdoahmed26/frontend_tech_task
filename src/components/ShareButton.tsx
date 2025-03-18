"use client"
import { Forward } from "lucide-react"
import toast from "react-hot-toast"

const ShareButton = ({id}:{id:string}) => {
    const handleShare = () => {
        navigator.clipboard.writeText(`${window.location.href}/${id}`)
        toast.success("Link copied to clipboard")
    }
    return (
        <button onClick={handleShare} title="Share" className="bg-blue-500 cursor-pointer p-2 rounded-md text-white flex justify-center items-center gap-2">
            <Forward size={18} />
        </button>
    )
}
export default ShareButton