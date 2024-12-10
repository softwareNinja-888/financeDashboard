import { financeData } from "../data/data.js";
import { ProOne } from "./Charts.jsx";
import car from '/car.png'
export function Saving(name,img,progress){
    
    // console.log(financeData.savings.goals);
    const dataSaving = financeData.savings.goals
    const refinedData = dataSaving.filter(i=>{
        return i.name !== 'Cash'
    }).slice(-4)
    console.log(refinedData);
    return (
        <>
            {refinedData.map((obj)=>{
                return (
                    <ProOne progress={obj.progress()} img={car} text={obj.name} key={obj.id}/>
                )
            })}
        </>
    )
}