import { Item } from "./GridItem";
import { IncomeEx } from "./IncomeEx.jsx";
import { Profile } from "./Profile.jsx";
import { Cash } from "./Cash.jsx";
import { Insight } from "./Insight.jsx"
import {DisplayInfo} from './DisplayInfo.jsx'
import { Budget } from "./Budget.jsx"

export function DisplayGrid(){
    return (
        <div className="displayGrid grid grid-cols-4 grid-rows-2 min-w-full gap-1">
            <Item space={null} child={Profile}/>
            <Item space={null} child={DisplayInfo}/>
            <Item space={null} child={DisplayInfo} />
            <Item space={'row-span-2'} child={Insight}/>
            <Item space={null} child={Cash}/>
            <Item space={'col-start-2 col-end-4'} child={IncomeEx}/>
               
        </div>
    )
}