import { Circle } from "./Charts.jsx"
import { financeData } from "../data/data.js"
// import {}
import external from '/external.png'
export function Cash(){

    const cashSavings = financeData.savings.goals.filter((i)=>{
        return i.name === 'Cash'
    })[0]

    const cashGoal = financeData.formatMoney(cashSavings.target,'ZAR')

    return (
        <div className="flex flex-col gap-3 h-full rounded-3xl bg-white transition ease-in-out delay-150  hover:bg-black hover:scale-105 group cursor-pointer">
            <div className="flex justify-between px-6 py-4">
                <span className="font-roboto group-hover:text-white">Cash Goal: <span className="">{cashGoal}</span></span>
                <img src={external} alt="external link" className="max-w-6 max-h-4"/>
            </div>
            <div className="flex justify-center">
                <Circle chartInfo={cashSavings} className="flex justify-center"/>
            </div>
            <div className="flex gap-6 px-6 py-2">
                <div className="flex justify-center items-center border border-black w-28 rounded-3xl p-2 font-roboto group-hover:text-white group-hover:border-white">{cashGoal}</div>
                <div className="flex justify-center items-center border border-black w-28 rounded-3xl p-2 font-roboto group-hover:text-white group-hover:border-white">{cashGoal}</div>
            </div>

        </div>
    )
}