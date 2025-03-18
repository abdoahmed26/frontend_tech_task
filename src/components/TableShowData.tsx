"use client"
import HeaderTable from "./HeaderTable"
import BodyTable from './BodyTable';
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { capsuleDataType, paginationType } from '@/types';
import { getMyCapsules } from "@/functions/getMyCapsules";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

export interface tableDataType {
    data: capsuleDataType[],
    pagination: paginationType
}

const TableShowData = () =>{
    const search = useSearchParams()
    const [data,setData] = useState<tableDataType>()
    useEffect(()=>{
        getMyCapsules(search.toString(),setData)
    },[search])
    // console.log(data)
    return(
        <>
        {
            data && data.data.length > 0 ? 
            <>
                <div className="overflow-x-scroll scrollbar">
                    <table className="min-w-[750px] w-full">
                        <HeaderTable></HeaderTable>
                        <BodyTable data={data.data}></BodyTable>
                    </table>
                </div>
                <Pagination meta={data?.pagination}/>
            </>
            : data && data.data.length === 0 ? <p className="text-center mt-5">You don&apos;t have any capsule</p>
            : <div className="flex justify-center items-center mt-5">
                <Spinner />
            </div>
        }
        </>
    )
}
const TableShowDataWrapper = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <TableShowData />
        </Suspense>
    );
};

export default TableShowDataWrapper;