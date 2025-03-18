"use client"
import { Plus } from "lucide-react"
import { useState } from "react"
import PopUpLayout from "./PopUpLayout"
import FormAddNew from "./FormAddNew"

const AddNew = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(true)} className="cursor-pointer flex justify-center items-center gap-2 text-white rounded-md hover:opacity-80 duration-300 bg-black p-2 px-3 outline-none">
                <Plus size={18} />
                Add New
            </button>
            {
                show &&
                <PopUpLayout show={show} setShow={setShow}>
                    <FormAddNew />
                </PopUpLayout>
            }
        </>
    )
}
export default AddNew