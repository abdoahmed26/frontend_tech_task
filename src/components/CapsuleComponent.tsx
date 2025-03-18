/* eslint-disable @next/next/no-img-element */
"use client"
import { capsuleDataType } from "@/types"

const CapsuleComponent = ({data}:{data:capsuleDataType}) => {
    const status = new Date() >= new Date(data.release_date);
    const date = new Date(data.release_date)
    const format = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return(
        <div className="flex justify-center">
            <div className="container">
                <h1 className="font-bold mb-5 text-xl">Capsule Details</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div>
                        <h1 className="font-bold mb-2">Capsule Image</h1>
                        {
                            data.image &&
                            <img src={data.image} alt="image" className="w-16 h-16 object-cover rounded-full" />
                        }
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Capsule Title</h1>
                        <p>{data.title}</p>
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Capsule Release Date</h1>
                        <p>{format}</p>
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Capsule Status</h1>
                        <p>{status ? "Released" : "Inactive"}</p>
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Capsule Text</h1>
                        <p>{data.text || "null"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CapsuleComponent