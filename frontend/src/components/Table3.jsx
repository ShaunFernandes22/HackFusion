import React from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      paper: "#1e293b",
      default: "#0f172a",
    },
    mode: "dark",
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: "10px 4px"
        },
        body: {
          padding: "7px 15px",
          color: "#e2e8f0"
        }
      }
    }
  }
}); 

const Table3 = () => {

  const columns = [
    {
      name: "id",
      label: "ID", 
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "role",
      label: "Role",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: false,
      }
    },
  ]

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

  const options = {
    filterType: 'checkbox',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20]
  };

  return (
    <div className='py-2 w-full grid place-items-center'>
      <div className='w-4/5'>
        <ThemeProvider theme={theme}>
          <MUIDataTable
            title={"Users List"}
            data={data}
            columns={columns}
            options={options}/>
        </ThemeProvider>
      </div>
    </div>
  )
}
export default Table3