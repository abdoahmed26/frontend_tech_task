import toast from "react-hot-toast"
import { axiosInstance, cookie } from "./axiosInstance"
import { loginDataType } from "@/types"

export const login = (data:loginDataType,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    axiosInstance.post("/auth/login",data,{
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then((response)=>{
        // console.log(response.data)
        cookie.set("token", response.data.data.token)
        toast.success("Login successful")
        window.location.assign("/home")
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