/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import PopUpLayout from "./PopUpLayout"
import Spinner from "./Spinner"
import { FormAddNewProps } from "./FormAddNew"
import { useForm } from "react-hook-form"
import { updateCapsule } from "@/functions/updateCapsule"

interface Props{
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    data: {
        _id:string,
        title:string,
        release_date:string,
        text:string | undefined,
        image:string | undefined,
    }
}

const FormUpdateCapsule = ({show, setShow,data}:Props) =>{
    const {register,handleSubmit,formState:{errors}} = useForm<FormAddNewProps>({defaultValues:{
        title: data.title,
        release_date: data.release_date,
        text: data.text,
    }})
    const [image,setImage] = useState<File>()
    const [loading,setLoading] = useState<boolean>(false)
    const onSubmit = (subData:FormAddNewProps) => {
        setLoading(true)
        if(image){
            updateCapsule(data._id,{...subData,image:image})
        }
        else{
            updateCapsule(data._id,{...subData})
        }
    }
    return(
        <PopUpLayout show={show} setShow={setShow}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <div className="mt-3">
                    <label htmlFor="title">Title : </label><br />
                    <input type="text" {...register("title",{required:true})} id="title" name="title" placeholder="Enter title" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.title?.type ==="required" && <p className="text-red-500 text-sm">title is required</p>}
                </div>
                <div className="mt-3">
                    <label htmlFor="date">Release date : </label><br />
                    <input type="date" {...register("release_date",{required:true})} id="date" name="release_date" placeholder="Enter release date" className="w-full h-8 mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 " />
                    {errors.release_date?.type ==="required" && <p className="text-red-500 text-sm">release date is required</p>}
                </div>
                <div className="mt-3">
                    <label htmlFor="photo">Image :</label><br />
                    <label htmlFor="photo">
                        {image || data.image ? (
                            <img src={image ? URL.createObjectURL(image) : data.image} alt="Selected Photo" className="w-20 h-20 object-cover rounded-md" />
                        ) : (
                            "No image selected"
                        )}
                    </label>
                    <input type="file" onChange={(e) => setImage(e.target.files![0])} id="photo" name="photo" className="hidden"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="body">Body : </label><br />
                    <textarea id="body" {...register("text")} name="text" placeholder="Enter body" className="w-full h-28 resize-none mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 "></textarea>
                </div>
                <div className="flex justify-end">
                    <button disabled={loading} className={`${loading && "pointer-events-none opacity-70"} w-fit flex justify-center items-center cursor-pointer gap-1 text-white mt-4 rounded-md bg-[#00acb4] p-2 outline-none `}>
                        {
                            loading ?
                            <>
                                <Spinner />
                                Editing
                            </>
                            :"Edit"
                        }
                    </button>
                </div>
            </form>
        </PopUpLayout>
    )
}
export default FormUpdateCapsule