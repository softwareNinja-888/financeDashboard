import { Welcome } from "./Welcome.jsx"
import { DisplayGrid } from "./Grid.jsx"
import { Saving } from "./SavingsSec.jsx"

import car from '/car.png'
import house from '/house.png'
import invest from '/invest.png'
import school from '/school.png'

export function Body(){
    return (
        <div className="px-10 py-12 flex flex-col gap-12">
            <Welcome name={'Bayanda'}/>
            <div className="progressInfo">
                <div className="savings progress grid grid-cols-4 gap-6">
                    <span className="font-mont text-xl col-span-4 pl-2">Saving Goals </span>
                    <Saving/>
                </div>
            </div>
            <DisplayGrid />
        </div>
    )
}