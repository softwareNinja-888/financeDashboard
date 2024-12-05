export function Header(){
    return (
        <div className="header flex justify-between px-10 py-5">
            <div className="left">
                <div className="font-inter logo border border-black px-4 py-2 rounded-2xl transition ease-in-out delay-200 hover:bg-black hover:text-white hover:scale-110 cursor-pointer">Finaus</div>
            </div>
            <div className="right">
                <ul className="links">
                    <a href="">
                        <li className="">Dashboard</li>
                    </a><a href="">
                        <li className="">People </li>
                    </a><a href="">
                        <li className="">Hiring </li>
                    </a><a href="">
                        <li className="">Devices </li>
                    </a><a href="">
                        <li>App </li>
                    </a><a href="">
                        <li>Salary </li>
                    </a><a href="">
                        <li>Calender </li>
                    </a><a href="">
                        <li>Reviews</li>
                    </a>
                </ul>   
                <div className="settings">
                    {/* <img src="" alt="" srcset="" />     */}
                    <div className="setting">Settings</div>
                </div> 
                <div className="notifications"></div>
                <div className="profile"></div>
            </div>
            
        </div>
    )
}