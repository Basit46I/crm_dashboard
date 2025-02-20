import { Table } from "../components/Table";
import { IoPlay } from "react-icons/io5";

const headers = [
    { key: "businessName", label: "Business name" },
    { key: "audioIcon", label: "Audio" },
];

const data = [
    { businessName: "Shazaib", audioIcon: () => <IoPlay size={20} className="cursor-pointer" /> }
];

const Recording = () => {
    return (
        <div className="p-5">
            <Table headers={headers} data={data} />
        </div>
    )
}

export default Recording