import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PopUpLayoutProps {
    style?: string,
    setShow: Dispatch<SetStateAction<boolean>>,
    show: boolean,
    children: ReactNode,
    styleChildren?: string
};

export interface loginDataType {
    email:string,
    password:string,
}

export interface registerDataType {
    name:string,
    email:string,
    password:string,
}

export interface paginationType{
    hasPreviousPage:boolean,
    hasNextPage:boolean,
    currentPage:number,
    totalPages:number,
    limit:number,
}

export interface capsuleDataType{
    _id:string,
    title:string,
    release_date:string,
    text?:string,
    image?:string,
    userId:string,
    isReleased:boolean,
    createdAt:string,
    updatedAt:string,
}