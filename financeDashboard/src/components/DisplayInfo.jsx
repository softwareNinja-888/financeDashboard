import { SegmentCircle } from "./Charts.jsx"
import { financeData } from "../data/data.js"
export function DisplayInfo(){
    return (
        <>
            <div className="flex flex-col items-center h-full rounded-3xl bg-white cursor-pointer">
                <div className="">Income</div>
                <SegmentCircle dataNew={null}/>
                <div className="">
                    {/* <CategoryList/> */}
                </div>
            </div>
        </>
    )
}