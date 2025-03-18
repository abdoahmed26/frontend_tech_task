import CapsuleMain from "@/components/CapsuleMain"

interface  Props {
    params: {
        id: string
    }
}
const Page = ({params}:Props) => {
    const {id} = params
    return (
        <>
            <CapsuleMain id={id} />
        </>
    )
}
export default Page