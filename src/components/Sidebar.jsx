import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu"
import { FaSuitcase } from 'react-icons/fa'
import { TbUser } from 'react-icons/tb'
import { Link } from "react-router-dom"
import { useState } from "react"

export const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(0);
    const handleClick = (index) => {
        setActiveLink(index)
    }

    const SIDEBAR_LINKS = [
        { id: 1, path: "/", name: "Dashboard", icon: LuBox },
        { id: 2, path: "/member", name: "Members", icon: TbUser },
        { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
        { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
        { id: 5, path: "/clients", name: "Clients", icon: LuUser },
        { id: 6, path: "/works", name: "Works Plan", icon: LuCalendar },
    ]

    return (
        <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen pt-8 px-4 bg-white">

            {/* Logo */}

            <div className="mb-8">
                <img src="/logo.svg" alt="logo" className="w-15 hidden md:flex" />
                <img src="/logo-2.svg" alt="logo" className="w-15 flex md:hidden" />
            </div>

            {/* Logo */}

            {/* Navigation Links */}

            <ul className="mt-6 space-y-6">
                {SIDEBAR_LINKS.map((link, index) => (
                    <li key={index} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : ""}`}>
                        <Link to={link.path} className="flex justify-center md:justify-start items-center md:space-x-5" onClick={() => handleClick(index)}>
                            <span>{link.icon()}</span>
                            <span className="text-sm text-gray-500 hidden md:flex">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Navigation Links */}

            <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
                <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
                    {""}
                    <span>?</span><span className="hidden md:flex">Need Help</span>
                </p>
            </div>

        </div>
    )
}
