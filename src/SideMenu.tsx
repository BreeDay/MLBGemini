import Link from "next/link"
import Image from "next/image"
import HomeImg from "./assets/home2.png"
import PlayImg from "./assets/play2.png"
import LeadImg from "./assets/ldboard.png"
import SchedImg from "./assets/sched.png"
import TeamImg from "./assets/teams2.png"

const MenuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: HomeImg,
                label: "Home",
                href: "/",
            },
            {
                icon: PlayImg,
                label: "Play Now",
                href: "/play",
            },
            {
                icon: LeadImg,
                label: "LeaderBoard",
                href: "/leaderboard",
            },
            {
                icon: SchedImg,
                label: "Schedule",
                href: "schedule",
            },
            {
                icon: TeamImg,
                label: "Teams",
                href: "teams",
            },
            
        ]
    }
]


const SideMenu = () => {
    return (
        <div className="mt-32 mx-4 text-sm">
            {MenuItems.map((i) => (
                <div className="flex flex-col gap-2" key={i.title}>
                    {/* <span className="hidden lg:block text-gray-800 font-bold mx-4 mt-2">{i.title}</span> */}
                    {i.items.map((item) =>(
                        <a href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 p-2 mt-4">
                            <img src={item.icon} alt="" width={24} height={24} />
                        <span className="hidden lg:block">{item.label}</span>
                        </a>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SideMenu