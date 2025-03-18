import AddNew from "@/components/AddNew"
import Logout from "@/components/Logout"
import TableShowData from "@/components/TableShowData"

const Home = ()=>{
    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Logout />
                    <AddNew />
                </div>
                <div className="mt-5">
                    <TableShowData />
                </div>
            </div>
        </div>
    )
}
export default Home