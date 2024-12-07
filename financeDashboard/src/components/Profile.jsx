import car from '/car.png'
import { financeData } from '../data/data.js'

export function Profile(){
    return (
        <div className="flex items-end py-8 px-2 gap-6 bg-profile bg-cover bg-center min-h-full rounded-2xl transition ease-in-out delay-150 hover:scale-105 cursor-pointer">
            <div className="flex flex-col gap-1">
                <span className="name text-white text-sm font-roboto">Bayanda Dlamini</span>
                <span className="occu text-white text-sm font-roboto">Frontend Developer</span>
            </div>
            <div className="flex items-center justify-center border border-white rounded-3xl p-2 transition ease-in-out delay-150 hover:scale-110 hover:bg-white hover:text-black min-w-24 text-white text-sm cursor-pointer font-roboto">
               {financeData.formatMoney(financeData.totalIncome() - financeData.totalExpense(),'ZAR')}
            </div>
        </div>
    )
}