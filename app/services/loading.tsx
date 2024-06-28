import { PuffLoader } from "react-spinners";



export default function Loading() {
    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center">
            <PuffLoader loading={true} size={50} color="#403F96" />
        </div>
    )
}