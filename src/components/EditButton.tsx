"use client"
import { Pencil } from "lucide-react"
import { useState } from "react"
import FormUpdateCapsule from "./FormUpdateCapsule"

interface Props{
    _id:string,
    title:string,
    release_date:string,
    text:string | undefined,
    image:string | undefined,
}

const EditButton = ({...data}:Props) =>{
    const [show, setShow] = useState(false)
    return(
        <>
            <button onClick={() => setShow(true)} title="Edit" className="bg-green-500 cursor-pointer p-2 rounded-md text-white flex justify-center items-center gap-2">
                <Pencil size={18} />
            </button>
            {
                show &&
                <FormUpdateCapsule show={show} setShow={setShow} data={data}/>
            }
        </>
    )
}
export default EditButton