import ReportsCard from "./card";
import ReportsHome from './ReportsHome'
import { Toolkit } from "@uitk/react";
import "@uitk/themes/optum/fonts.css";
import React from 'react';

const App = () => (
  <Toolkit appId="@uitk/react-starter-kit">
  <div>
    <ReportsHome/>
    {/* <ReportsCard/> */}
  </div>
  </Toolkit>
);

export default App;
