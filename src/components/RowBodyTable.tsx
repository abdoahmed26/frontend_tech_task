"use client"
/* eslint-disable @next/next/no-img-element */
import ShareButton from "./ShareButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useRouter } from "next/navigation";

interface Props{
    title: string,
    text?: string,
    image?: string,
    release_date: string,
    _id: string,
    index: number
}
const RowBodyTable = (data:Props) =>{
    const router = useRouter()
    const status = new Date() >= new Date(data.release_date);
    const date = new Date(data.release_date)
    const format = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const sendDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
    return(
        <>
            <tr className="border-b border-gray-200 cursor-pointer">
                <td onClick={() => router.push(`/home/${data._id}`)} className="text-center">{data.index}</td>
                <td className="flex justify-center">
                    <p className="py-2">
                        {
                            data.image &&
                            <img src={data.image} alt="image" className="w-16 h-16 object-cover rounded-full" />
                        }
                    </p>
                </td>
                <td onClick={() => router.push(`/home/${data._id}`)} className="text-center">{data.title}</td>
                <td className="text-center">{format}</td>
                <td className="text-center">{data.text?.slice(0, 50)}</td>
                <td className="text-center">
                    <span className="bg-gray-200 p-1 rounded-md">
                        {
                            status ? "Released" : "Inactive"
                        }
                    </span>
                </td>
                <td>
                    <div className="flex justify-center items-center gap-2 py-2">
                        <EditButton _id={data._id} title={data.title} text={data.text} image={data.image} release_date={sendDate} />
                        <DeleteButton id={data._id} />
                        <ShareButton id={data._id} />
                    </div>
                </td>
            </tr>
        </>
    )
}
export default RowBodyTable