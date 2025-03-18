import toast from "react-hot-toast"
import { axiosInstance, cookie } from "./axiosInstance"

export const deleteCapsule = (id:string,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    axiosInstance.delete(`/capsule/${id}`,{
        headers:{
            "Authorization": `Bearer ${cookie.get("token")}`
        }
    })
    .then(()=>{
        // console.log(response.data)
        toast.success("Delete capsule successful")
        window.location.reload()
    })
    .catch((error)=>{
        // console.log(error)
        toast.error(error.response.data.message)
    })
    .finally(()=>{
        setLoading(false)
    })
}