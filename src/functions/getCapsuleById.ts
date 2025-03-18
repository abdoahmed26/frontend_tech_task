import toast from "react-hot-toast"
import { axiosInstance, cookie } from "./axiosInstance"
import { capsuleDataType } from "@/types"
import { Dispatch, SetStateAction } from "react"

export const getCapsuleById = (id:string,setData: Dispatch<SetStateAction<capsuleDataType | undefined>>) => {
    axiosInstance.get(`/capsule/${id}`,{
        headers:{
            "Authorization": `Bearer ${cookie.get("token")}`,
            "Content-Type":"application/json",
        }
    })
    .then(res => {
        // console.log(res.data)
        setData(res.data.data)
    })
    .catch(err => {
        toast.error(err.response.data.message)
    })
}