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

  const tableStyles = {
    width: '82vw',
    height: '90vh',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(7px)',
    boxShadow: '0 .4rem .8rem rgba(0, 0, 0, 0.2)',
    borderRadius: '.8rem',
    overflow: 'hidden',
  };

  const headerStyles = {
    width: '100%',
    height: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '.8rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const inputGroupStyles = {
    width: '35%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '0 .8rem',
    borderRadius: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.2s',
  };

  const inputGroupHoverStyles = {
    width: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 .1rem .4rem rgba(0, 0, 0, 0.05)',
  };

  const inputStyles = {
    width: '100%',
    padding: '0 .5rem 0 .3rem',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
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
        highlightOnHover
        striped
        dense
        responsive
        noHeader
      />
    </div>
  );
};

export default Table2;
