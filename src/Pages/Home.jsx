import { Table } from "../components/Table";
import { leadsData } from "../constants/data";

const headers = [
    { key: "createdDate", label: "Created Date" },
    { key: "leadName", label: "Lead Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "owner", label: "Owner" },
    { key: "status", label: "Status" },
];

const Home = () => {
    return (
        <div className="p-5">
            <Table headers={headers} data={leadsData} />
        </div>
    )
}

export default Home