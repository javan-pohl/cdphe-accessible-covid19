import React from "react";
import Card from "./Card/Card";

const DailyStats = ({data, type, yAccessor}) => {
  return (
    <div>
      <Card data={data} type={type} yAccessor={yAccessor}/>
    </div>
  );
};

export default DailyStats;
