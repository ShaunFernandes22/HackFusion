import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
const Table2 = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <Badge bg={getStatusColor(row.status)}>{row.status}</Badge>
      ),
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
      status: "Frustrated",
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
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(filterData);
  };
  const getStatusColor = (status) => {
    const statusColors = {
      Confused: "danger",
      Engagement: "primary",
      Frustrated: "warning",
      Excited: "success",
      Satisfaction: "info",
      Boredom: "dark",
    };
    return statusColors[status] || "secondary";
  };

  return (
    <div className="container mt-5 mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="w-1/4">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Filter by name..."
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          paginationPerPage={6}
          highlightOnHover
          striped
          dense
          responsive
          noHeader
          customStyles={{
            head: {
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            },
            rows: {
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Table2;
