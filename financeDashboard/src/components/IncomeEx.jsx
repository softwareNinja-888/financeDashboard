import { LineGraphs } from "./Charts.jsx"

export function IncomeEx(){
    return (
        <div className="flex flex-col gap-6 justify-center items-center bg-white">
            <span className="font-inter text-lg">Income and Expenses</span>
            <LineGraphs/>
        </div>
    )
}