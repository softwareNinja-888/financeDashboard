import { financeData } from "../data/data.js";
import { ProOne } from "./Charts.jsx";
import car from '/car.png'
export function Saving(){
    
    // Editing data

    const dataSaving = financeData.savings.goals
    const refinedData = dataSaving.filter(i=>{
        return i.name !== 'Cash'
    }).slice(-4)

    // Getting images
    // TODO 
    // USE ASYNC JS TO FECTH IMGS FROM WEB TO DYNAMICALLY ADD TO SAVINGS GOAL SECTION. Make sure there are in proper colors 



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