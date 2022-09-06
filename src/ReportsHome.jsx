// import "@uitk/themes/optum/fonts.css";
// import React from 'react';

// const ReportsHome = () => (
//   <div>Reports HomeV1</div>
// );

// export default ReportsHome;

import React from "react";
import { Table } from "@uitk/react";
import styled from "styled-components";

const config = {
  columns: [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Date", key: "date" },
    { label: "SSN", key: "ssn" },
  ],
  caption: {
    headerText: "Basic Table",
  },
};

const dataSource = [
  {
    id: "1",
    firstName: "Joe",
    lastName: "Blogs",
    date: "1987-08-12",
    ssn: "SSN_000005",
  },
  {
    id: "2",
    firstName: "Stephen",
    lastName: "Cruise",
    date: "2000-05-23",
    ssn: "SSN_000002",
  },
  {
    id: "3",
    firstName: "Daniel",
    lastName: "Henderson",
    date: "1968-02-03",
    ssn: "SSN_000007",
  },
  {
    id: "4",
    firstName: "Julia",
    lastName: "O'Sullivan",
    date: "2013-12-11",
    ssn: "SSN_000003",
  },
  {
    id: "5",
    firstName: "Paul",
    lastName: "Murphy",
    date: "1938-03-11",
    ssn: "SSN_000009",
  },
  {
    id: "6",
    firstName: "Jimmy",
    lastName: "Newman",
    date: "2016-01-22",
    ssn: "SSN_000004",
  },
  {
    id: "7",
    firstName: "Siobhan",
    lastName: "Gibbons",
    date: "1983-05-04",
    ssn: "SSN_000006",
  },
  {
    id: "8",
    firstName: "Aoife",
    lastName: "McCann",
    date: "1955-03-06",
    ssn: "SSN_000008",
  },
];

const ReportsHome= () => (
  <Table data={dataSource} config={config} />
);

export default ReportsHome;



