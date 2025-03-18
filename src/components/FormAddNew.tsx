"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Spinner from "./Spinner"
import { createCapsule } from "@/functions/createCapsule"

export interface FormAddNewProps {
    title: string,
    text:string,
    release_date:string,
}

const FormAddNew = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<FormAddNewProps>()
    const [photo,setPhoto] = useState<File | null>(null)
    const [loading,setLoading] = useState<boolean>(false)

    const onSubmit = (data:FormAddNewProps) => {
        setLoading(true)
        // console.log({...data,image:photo})
        createCapsule({...data,image:photo},setLoading)
    }
    return (
        <>
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
                    <label htmlFor="image">Image :</label><br />
                    <label htmlFor="image" className="w-full cursor-pointer h-14 flex justify-center items-center mt-1 rounded-md focus:border-[2px] focus:border-[#00acb4] p-2 outline-none bg-slate-200 text-sm">
                        <span>
                            {
                                photo ?
                                    <span>{photo.name}</span>
                                :
                                    <span>Choose image</span>
                            }
                        </span>
                    </label>
                    <input type="file" onChange={(e) => setPhoto(e.target.files![0])} id="image" name="image" className="hidden"/>
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
                                Saving
                            </>
                            :"Save"
                        }
                    </button>
                </div>
            </form>
        </>
    )
}
export default FormAddNew