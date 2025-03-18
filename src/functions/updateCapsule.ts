import toast from "react-hot-toast"
import { axiosInstance, cookie } from "./axiosInstance"

interface Props{
    title: string,
    text?: string,
    image?: File,
    release_date: string,
}

export const updateCapsule = (id:string,data:Props) => {
    axiosInstance.put(`/capsule/${id}`,data,{
        headers:{
            "Content-Type":"multipart/form-data",
            Authorization: `Bearer ${cookie.get("token")}`
        }
    })
    .then(() => {
        toast.success("Capsule updated successfully")
        window.location.reload()
    })
    .catch(err => {
        // console.log(err)
        toast.error(err.response.data.message)
    })
}