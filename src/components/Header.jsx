import { PiBellSimpleFill } from "react-icons/pi"

export const Header = ({ activePageName }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white">
            <div>
                <p className="text-xl font-semibold">{activePageName}</p>
            </div>
            <div className="flex items-center space-x-5">
                <div className="hidden md:flex">
                    <input type="text" placeholder="Search..." className="bg-indigo-100/30 px-4 py-3 text-sm rounded-lg focus:outline-0 focus:ring-indigo-600" />
                </div>
                <div className="flex items-center space-x-5">
                    <button className="relative text-2xl text-gray-600">
                        <PiBellSimpleFill size={28} />
                        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
