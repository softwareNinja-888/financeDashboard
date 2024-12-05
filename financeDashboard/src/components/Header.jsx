import { Link } from "./Link.jsx"
import settings from '/setting.png'
import profile from '/person.png'
import notification from '/notification.png'
export function Header(){
    return (
        <div className="header flex justify-between items-center px-10 py-5">
            <div className="left">
                <div className="font-inter logo border border-black px-4 py-2 rounded-2xl transition ease-in-out delay-200 hover:bg-black hover:text-white hover:scale-110 cursor-pointer">Finaus</div>
            </div>
            <div className="right flex items-center gap-10">
                <div className="links flex border border-black rounded-full  bg-white p-1 gap-2">
                    <Link text={'Dashboard'}/>
                    <Link text={'People'}/>
                    <Link text={'Hiring'}/>
                    <Link text={'Devices'}/>
                    <Link text={'App'}/>
                    <Link text={'Salary'}/>
                    <Link text={'Calender'}/>
                    <Link text={'Reviews'}/>
            
                </div>
                <div className="settings flex gap-2 border border-black rounded-full  bg-white p-2 transition delay-150 ease-in-out cursor-pointer hover:scale-105">
                    <img src={settings} alt="setting icon" className="max-w-5" />    
                    <div className="setting">Settings</div>
                </div> 
                <div className="notifications flex gap-2 border border-black rounded-full  bg-white p-2 transition delay-150 ease-in-out cursor-pointer hover:scale-105">
                    <img src={notification} alt="notification icon" className="max-w-5" />
                </div>
                <div className="profile flex gap-2 border border-black rounded-full  bg-white p-2 transition delay-150 ease-in-out cursor-pointer hover:scale-105">
                    <img src={profile} alt="profile icon" className="max-w-5" />
                </div>
            </div>
            
        </div>
    )
}
