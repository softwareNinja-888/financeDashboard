
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
                <div className="income flex flex-col items-center pt-4">
                    <div className="insightHead">
                        <span className="font-space text-xl">All Income</span>
                    </div> 
                    <div className="flex flex-row justify-around px-4 pt-4 text-sm min-w-full">
                        <div className="flex flex-col ">
                            <span className="">Monthly Avg</span>
                            <span className="font-bold">R 2 600</span>
                        </div>
                        <div className="flex flex-col ">
                            <span className="">Yearly Avg</span>
                            <span className="font-bold">R 2 600</span>
                        </div>
                    </div>
                    <SegmentCircle dataNew={data}/>
                   
                </div>
                <div className="expense flex flex-col items-center">
                    <div className="insightHead">
                        <span className="font-space text-xl">All Expense</span>
                    </div>
                    <div className="flex flex-row justify-around px-4 pt-4 text-sm min-w-full">
                    <div className="flex flex-col">
                            <span className="">Monthly Avg</span>
                            <span className="font-bold">R 2 600</span>
                        </div>
                        <div className="flex flex-col ">
                            <span className="">Yearly Avg</span>
                            <span className="font-bold">R 2 600</span>
                        </div>
                    </div>
                        
                    <SegmentCircle dataNew={data}/>
                   
                </div>
            </div>
        )

}





