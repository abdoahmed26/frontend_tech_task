import { capsuleDataType } from "@/types"
import RowBodyTable from "./RowBodyTable"

const BodyTable = ({data}:{data: capsuleDataType[],}) =>{
    return(
        <>
            <tbody>
                {
                    data.map((item,index)=>(
                        <RowBodyTable key={item._id} {...item} index={index+1} />
                    ))
                }
            </tbody>
        </>
    )
}
export default BodyTable