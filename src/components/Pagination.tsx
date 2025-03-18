"use client"
import { useFilters } from "@/hooks/Filters";
import { paginationType } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({meta}:{meta?:paginationType}) {
    const addFilter = useFilters()
    const pagination = {
        hasPrev : meta?.hasPreviousPage || false,
        hasNext : meta?.hasNextPage || false,
        page : meta?.currentPage || 1,
        totalPages : meta?.totalPages || 1,
    }
    return (
        <div className="my-5 flex justify-end gap-2 flex-wrap">
            <button disabled={!pagination.hasPrev}
                className={`relative inline-flex items-center rounded-md px-[6px] py-1 border-0 shadow-md bg-[#E8E8E8] focus:z-20 focus:outline-offset-0`}
                onClick={() => {
                    addFilter("pageNo",`${pagination.page - 1}`);
                }}
            >
                <ChevronLeft size={18} />
            </button>
            {Array.from({length: pagination.totalPages || 0},(_e, i) => (
                    i+1 === pagination.page || i+1 === pagination.totalPages || i+1 ===1 || i+1 ===2 ?
                    <button
                        key={i}
                        className={` relative z-10 inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold shadow-md focus:z-20 focus-visible:outline-indigo-600 ${
                        pagination.page === i + 1 ? "bg-[#00CC66] text-black" : "border bg-[#E8E8E8] dark:bg-gray-700"
                        }`}
                        onClick={() => {
                        addFilter("pageNo",`${i + 1}`);
                        }}
                    >
                        {i + 1}
                    </button >
                    : i+1 === +(pagination.totalPages)-1 ? <div key={i} className="flex items-center"><span className="dark:text-white px-2">...</span></div>
                    :null
            ))}
            <button disabled={!pagination.hasNext}
                className={`relative inline-flex items-center rounded-md px-[6px] py-1 border-0 shadow-md bg-[#E8E8E8] focus:z-20 focus:outline-offset-0`}
                onClick={() => {
                    addFilter("pageNo",`${pagination.page + 1}`);
                }}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
}