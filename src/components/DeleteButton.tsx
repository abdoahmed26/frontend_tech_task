"use client"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import Spinner from "./Spinner"
import { deleteCapsule } from "@/functions/deleteCapsule"

const DeleteButton = ({id}:{id:string}) =>{
    const [loading,setLoading] = useState(false)
    return(
        <button title="Delete" onClick={() => {setLoading(true);deleteCapsule(id,setLoading)}} className="bg-red-500 cursor-pointer p-2 rounded-md text-white flex justify-center items-center gap-2">
            {
                loading ?
                    <Spinner />
                :<Trash2 size={18} />
            }
        </button>
    )
}
export default DeleteButton