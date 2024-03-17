<<<<<<< Updated upstream
import React from 'react'
import HistoryInfo from '../components/HistoryInfo'

const DashBoard = () => {
  return (
    <>
        <HistoryInfo/>
        {/* <Tables/> */}
=======
import React from "react";
import Charts from "../components/Charts";
import { DataTable } from "../components/Table";
import Table2 from "../components/Table2";
const DashBoard = () => {
  return (
    <>
      <Charts />
      {/* <DataTable /> */}
      <Table2 />
>>>>>>> Stashed changes
    </>
  );
};

export default DashBoard;
