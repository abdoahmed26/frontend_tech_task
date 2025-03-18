import AddNew from "@/components/AddNew"
import Logout from "@/components/Logout"
import TableShowDataWrapper from "@/components/TableShowData"

const Home = ()=>{
    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Logout />
                    <AddNew />
                </div>
                <div className="mt-5">
                    <TableShowDataWrapper />
                </div>
            </div>
        </div>
    )
}
export default Home