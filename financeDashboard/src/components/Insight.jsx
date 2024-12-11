
import { SegmentCircle } from "./Charts.jsx";



export function Insight(){

    const data = [
        { name: "Group A", value: 400, fill: "#ffc658" },
        { name: "Group B", value: 300, fill: "#8884d8" },
        { name: "Group C", value: 300, fill: "#82ca9d" },
        { name: "Group D", value: 200, fill: "#ff8042" }
    ];

    return (
            <div className="h-full rounded-3xl bg-white cursor-pointer">
                <SegmentCircle dataNew={data}/>
            </div>
        )

}





