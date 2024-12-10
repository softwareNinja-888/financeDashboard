import { Welcome } from "./Welcome.jsx"
import { ProOne,Circle } from "./Charts.jsx"
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
                    {/* <ProOne text={'Car'} price={100000} progress={90} img={car}/>
                    <ProOne text={'House'} price={100000} progress={45} img={house}/>
                    <ProOne text={'Investmenrt'} price={100000} progress={30} img={invest}/>
                    <ProOne text={'School'} price={100000} progress={30} img={school}/> */}
                </div>
                <div className="info"></div>
            </div>
            <DisplayGrid />
        </div>
    )
}