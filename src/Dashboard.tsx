import SideMenu from "./SideMenu";
import LogoIcon from "./assets/MyLB.svg";
import { Header } from "./Header";
import App from './App';

export const Dashboard = () => {
    return (
        <div className="h-screen flex bg-blue-900">
            <Header/>
            {/* <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] bd-red-200"> */}
            {/* <img src={LogoIcon} alt="MyLB Logo" className="rounded-lg h-16 w-24"/> */}
            <SideMenu/>
            <App/>
            {/* </div> */}
            {/* <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-900 overflow-scroll"> */}
            {/* </div> */}
        </div>
    )
}




