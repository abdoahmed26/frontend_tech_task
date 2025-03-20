import toast from "react-hot-toast"
import { axiosInstance, cookie } from "./axiosInstance"
import { tableDataType } from "@/components/TableShowData"
import { Dispatch, SetStateAction } from "react"

export const getMyCapsules = (search:string,setData: Dispatch<SetStateAction<tableDataType | undefined>>)=>{
    axiosInstance.get(`/capsule?${search}&limit=10`,{
        headers:{
            Authorization:`Bearer ${cookie.get("token")}`,
            "Content-Type":"application/json"
        }
    })
    .then((res)=>{
        // console.log(res.data)
        setData(res.data)
    })
    .catch((err)=>{
        toast.error(err.response.data.message)
    })
}