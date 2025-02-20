import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from "react-icons/fa6";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { IoCallSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom";

export const Sidebar = ({ isExpanded, setIsExpanded, sidebarLinks, dropdownLinks }) => {

    const [dropdown, setDropdown] = useState(false)
    const location = useLocation();

    return (
        <div className={`h-screen fixed left-0 top-0 transition-all ${isExpanded ? "w-60" : "w-16"}`}>
            <div className="h-full flex flex-col bg-white shadow-sm">

                {/* Logo */}

                <div className="p-4 pb-4 flex justify-between items-center">
                    <img src="logoipsum-243.svg" alt="logo" className={`overflow-hidden transition-all ${isExpanded ? "w-32" : "w-0"}`} />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
                    </button>
                </div>

                {/* Logo */}

                {/* Navigation Links */}

                <ul className="flex-1 px-3 pt-4 space-y-6">
                    {sidebarLinks.map((link, index) => (
                        <li key={index} className="relative my-1">
                            <Link to={link.path} className={`flex items-center py-3 px-3 text-xl font-medium rounded-md cursor-pointer transition-colors w-full ${location.pathname === link.path ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-gray-200 text-gray-600"}`} >
                                {link.icon()}
                                <span className={`transition-all text-sm ${isExpanded ? "ml-3 w-auto opacity-100" : "w-0 opacity-0"}`}>
                                    {link.name}
                                </span>
                            </Link>
                        </li>
                    ))}

                    <li className="relative my-1">
                        <div className={`flex items-center justify-between py-3 px-3 text-xl font-medium rounded-md cursor-pointer transition-colors w-full hover:bg-gray-200 text-gray-600`} onClick={() => setDropdown(!dropdown)}>
                            <div className="flex items-center">
                                <IoCallSharp />
                                <span className={`transition-all text-sm ${isExpanded ? "ml-3 w-auto opacity-100" : "w-0 opacity-0"}`}>
                                    Calls
                                </span>
                            </div>
                            {isExpanded && (
                                <div>
                                    <IoIosArrowDown size={18} />
                                </div>
                            )}
                        </div>

                        {isExpanded && (

                            <ul className={`overflow-hidden transition-all duration-300 space-y-6 ml-3 ${dropdown ? "max-h-[200px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0"}`}>
                                {dropdownLinks.map((link, index) => (
                                    <li key={index} className="relative my-1">
                                        <Link to={link.path} className={`flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors w-full ${location.pathname === link.path ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-gray-200 text-gray-600"}`}>
                                            {link.icon()}
                                            <span className={`text-sm ml-3 w-auto opacity-100`}>
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                    </li>

                </ul>

                {/* Navigation Links */}

                {/* User info */}

                <div className="border-t flex p-3">
                    <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" className="w-10 h-10 rounded-md" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${isExpanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h3 className="text-sm semi-bold">Abdul Basit</h3>
                            <span className="text-xs text-gray-600">abc@example.com</span>
                        </div>
                        <div className="cursor-pointer">
                            <CgMoreVerticalAlt size={20} />
                        </div>
                    </div>
                </div>

                {/* User info */}

            </div>
        </div >
    )
}
