import { PopUpLayoutProps } from "@/types";
import { X } from "lucide-react";

export default function PopUpLayout({ style, setShow, children, show, styleChildren }: PopUpLayoutProps) {
    return (
        <>
            <div className={`fixed top-0 left-0 z-[99] w-full h-screen bg-black opacity-80 ${style} ${show ? "block" : "hidden"}`} onClick={() => setShow(false)}>
            </div>
            <div className={`fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-[100] p-4 bg-white rounded-lg w-[90%] sm:w-[450px] h-fit ${styleChildren} ${show ? "block" : "hidden"}`}>
                {children}
                <button className="absolute top-2 right-2 cursor-pointer text-gray-400" onClick={() => setShow(false)}>
                    <X size={22}/>
                </button>
            </div>
        </>
    );
}