import CapsuleMain from "@/components/CapsuleMain"

interface Props {
    params: Promise<{ id: string }>
}

const Page = async({params}:Props) => {
    const { id } = await params
    return (
        <>
            <CapsuleMain id={id} />
        </>
    )
}
export default Page