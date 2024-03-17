import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
const Table2 = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    // {
    //   name: "Email",
    //   selector: (row) => row.email,
    //   sortable: true,
    // },

    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Sudhir Bagul",
      role: "Teacher",
      status: "active",
    },
    {
      id: 2,
      name: "Kiranji",
      role: "Admin",
      status: "active",
    },
    {
      id: 3,
      name: "Hemant Singh",
      role: "Student",
      status: "Boredom",
    },

    {
      id: 4,
      name: "Akshay Kamath",
      role: "Student",
      status: "Excitement",
    },
    {
      id: 5,
      name: "Shaun Fernandes",
      role: "Student",
      status: "Engagement",
    },
    {
      id: 6,
      name: "Naman Shah",
      role: "Student",
      status: "Boredom",
    },
    {
      id: 7,
      name: "Daksh Jain",
      role: "Student",
      status: "Confused",
    },
    {
      id: 8,
      name: "Rushabh Shah",
      role: "Student",
      status: "Confused",
    },
    {
      id: 9,
      name: "Varun Viswanath",
      role: "Student",
      status: "Excited",
    },
    {
      id: 10,
      name: "Rahqan Shaikh",
      role: "Student",
      status: "Boredom",
    },
  ];
  const [records, setRecords] = useState(data);
  const handleFilter = (event) => {
    const filterData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value);
    });
    setRecords(filterData);
  };
  return (
    <div className="container mt-5">
      <div className="text-end">
        <input type="text " onChange={handleFilter}></input>
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        paginationPerPage={6}
      />
    </div>
  );
};

export default Table2;
