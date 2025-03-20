"use client"
import { useFilters } from "@/hooks/Filters";
import { paginationType } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({meta}:{meta:paginationType}) {
    const addFilter = useFilters()
    return (
        <div className="my-5 flex justify-end gap-2 flex-wrap">
            <button disabled={!meta.hasPreviousPage}
                className={`relative inline-flex items-center rounded-md px-[6px] py-1 border-0 shadow-md bg-[#E8E8E8] focus:z-20 focus:outline-offset-0`}
                onClick={() => {
                    addFilter("page",`${meta.currentPage - 1}`);
                }}
            >
                <ChevronLeft size={18} />
            </button>
            {Array.from({length: meta.totalPages || 0},(_e, i) => (
                    i+1 === meta.currentPage || i+1 === meta.totalPages || i+1 ===1 || i+1 ===2 ?
                    <button
                        key={i}
                        className={` relative z-10 inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold shadow-md focus:z-20 focus-visible:outline-indigo-600 ${
                        meta.currentPage === i + 1 ? "bg-[#00CC66] text-black" : "border bg-[#E8E8E8] dark:bg-gray-700"
                        }`}
                        onClick={() => {
                        addFilter("page",`${i + 1}`);
                        }}
                    >
                        {i + 1}
                    </button >
                    : i+1 === +(meta.totalPages)-1 ? <div key={i} className="flex items-center"><span className="dark:text-white px-2">...</span></div>
                    :null
            ))}
            <button disabled={!meta.hasNextPage}
                className={`relative inline-flex items-center rounded-md px-[6px] py-1 border-0 shadow-md bg-[#E8E8E8] focus:z-20 focus:outline-offset-0`}
                onClick={() => {
                    addFilter("page",`${meta.currentPage + 1}`);
                }}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
}