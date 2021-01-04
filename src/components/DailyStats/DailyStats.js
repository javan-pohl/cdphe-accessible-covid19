import React from "react";
import Card from "./Card/Card";
import DataTable from './DataTable/DataTable';


const DailyStats = ({data, type, yAccessor}) => {
  return (
    <div>
      <Card data={data} type={type} yAccessor={yAccessor}/>
      <DataTable data={data[0]} type={type}/> 
    </div>
  );
};

export default DailyStats;
