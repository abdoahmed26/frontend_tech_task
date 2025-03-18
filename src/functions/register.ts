import toast from "react-hot-toast"
import { axiosInstance } from "./axiosInstance"
import { registerDataType } from "@/types"

export const registerFun = (data:registerDataType,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    axiosInstance.post("/auth/register",data,{
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(()=>{
        // console.log(response.data)
        toast.success("Register successful")
        window.location.assign("/login")
    })
    .catch((error)=>{
        // console.log(error)
        if(Array.isArray(error.response.data.message)){
            toast.error(error.response.data.message[0].msg)
        }
        else{
            toast.error(error.response.data.message)
        }
    })
    .finally(()=>{
        setLoading(false)
    })
}