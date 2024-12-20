import { Welcome } from "./Welcome.jsx"
import { Savings,ChartSave,Recharts } from "./Savings.jsx"
import car from '/car.png'
import house from '/house.png'
import invest from '/invest.png'
import school from '/school.png'

export function Body(){
    return (
        <div className="">
            <Welcome name={'Bayanda'}/>
            <div className="progressInfo">
                <div className="savings progress px-9 grid grid-cols-4 gap-3">
                    <span className="font-mont text-xl col-span-4 pl-2">Saving Goals </span>
                    <Savings text={'Car'} price={100000} progress={90} img={car}/>
                    <Savings text={'House'} price={100000} progress={45} img={house}/>
                    <Savings text={'Investmenrt'} price={100000} progress={30} img={invest}/>
                    <Savings text={'School'} price={100000} progress={30} img={school}/>


                </div>
                <div className="info"></div>
            </div>
        </div>
    )
}