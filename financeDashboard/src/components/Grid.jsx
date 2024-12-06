import { Item } from "./GridItem";
import { IncomeEx } from "./IncomeEx.jsx";
import { Profile } from "./Profile.jsx";

export function DisplayGrid(){
    return (
        <div className="displayGrid grid grid-cols-4 grid-rows-2 min-w-full gap-1">
            <Item space={null} child={Profile}/>
            <Item space={null}/>
            <Item space={null}/>
            <Item space={'row-span-2'}/>
            <Item space={null}/>
            <Item space={'col-start-2 col-end-4'} child={IncomeEx}/>
               
        </div>
    )
}