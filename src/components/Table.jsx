import { leadsData } from "../constants/data"
export const Table = () => {
    return (
        <div className="dataTables_wrapper no-footer p-4 bg-white rounded-lg shadow-md">
            <table className="w-full border text-sm text-left text-gray-500">
                <thead className="text-xs border text-gray-600 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-4 py-3 w-12">
                            <input type="checkbox" id="selectall" className="w-3.5 h-3.5" />
                        </th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Created Date</th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Lead Name</th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Phone</th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Email</th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Owner</th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Status</th>
                        <th scope="col" className="px-4 py-4 text-sm capitalize">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    {
                        leadsData.map((row, index) => (
                            <tr key={index} className="">
                                <td className="px-4 py-5">
                                    <input type="checkbox" className="w-3.5 h-3.5" />
                                </td>
                                <td className="px-4 py-5">{row.createdDate}</td>
                                <td className="px-4 py-5">
                                    <a href="leads-details.html" className="text-blue-600 hover:underline">{row.leadName}</a>
                                </td>
                                <td className="px-4 py-5">{row.phone}</td>
                                <td className="px-4 py-5">{row.email}</td>
                                <td className="px-4 py-5 font-medium text-gray-900">{row.owner}</td>
                                <td className="px-4 py-5">
                                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded ${row.status === "Pending" ? "bg-orange-500" : row.status === "Rejected" ? "bg-red-500" : row.status === "Approved" ? "bg-green-500" : row.status === "Contacted" ? "bg-purple-500" : ""}`}>{row.status}</span>
                                </td>
                                <td className="px-4 py-5">
                                    <div className="flex items-center gap-3">
                                        <button className="text-gray-400 hover:text-blue-600">
                                            <i className="fa-regular fa-eye"></i>
                                        </button>
                                        <button className="text-gray-400 hover:text-green-600">
                                            <i className="fa-sharp fa-light fa-pen"></i>
                                        </button>
                                        <button className="text-gray-400 hover:text-red-600">
                                            <i className="fa-regular fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};