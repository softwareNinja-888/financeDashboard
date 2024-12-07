import { LineGraphs } from "./Charts.jsx"
import { financeData,IncomeExpenses } from "../data/data.js"

export function IncomeEx(){
    return (
        <div className="flex flex-col gap-6 justify-center items-center bg-white">
            <span className="font-inter text-lg">Income and Expenses</span>
            <LineGraphs data={IncomeExpenses.merged}/>
        </div>
    )
}