import toast from "react-hot-toast"
import { axiosInstance, cookie } from "./axiosInstance"

interface createCapsuleType {
    title: string,
    text: string,
    image: File | null,
    release_date: string
}

export const createCapsule = (data:createCapsuleType,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    axiosInstance.post("/capsule",data,{
        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${cookie.get("token")}`
        }
    })
    .then(()=>{
        // console.log(response.data)
        toast.success("Create capsule successful")
        window.location.reload()
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