
import { SegmentCircle } from "./Charts.jsx";



export function Insight(){

    const data = [
        { name: "Group A", value: 1400, fill: "#ffc658" },
        { name: "Group B", value: 300, fill: "#8884d8" },
        { name: "Group C", value: 300, fill: "#82ca9d" },
        { name: "Group D", value: 200, fill: "#ff8042" }
    ];

    return (
            <div className="flex flex-col items-center h-full rounded-3xl bg-white cursor-pointer">
                <div className="insightHead">
                    <span className="">All Expenses</span>
                </div>
                <SegmentCircle dataNew={data}/>
                <div className="cat">
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                </div>
            </div>
        )

}





