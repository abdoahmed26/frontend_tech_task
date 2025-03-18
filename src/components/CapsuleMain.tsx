"use client"
import { getCapsuleById } from "@/functions/getCapsuleById"
import { capsuleDataType } from "@/types"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import CountDown from "./CountDown"
import CapsuleComponent from "./CapsuleComponent"

const CapsuleMain = ({id}:{id:string})=>{
    const [data,setData] = useState<capsuleDataType>()
    useEffect(()=>{
        getCapsuleById(id,setData)
    },[id])
    return(
        <>
            {
                data ? 
                <>
                    {
                        data.isReleased ?
                        <CapsuleComponent data={data} />
                        : <CountDown releaseDate={data.release_date} />
                    }
                </>
                : <div className="flex justify-center items-center mt-5">
                    <Spinner />
                </div>
            }
        </>
    )
}
export default CapsuleMain