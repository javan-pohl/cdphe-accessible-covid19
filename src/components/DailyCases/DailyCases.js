import React, { useState, useEffect } from "react";
import Card from "./Card/Card";

const DailyCases = (props) => {
  return (
    <div>
      <Card data={props.data} />
    </div>
  );
};

export default DailyCases;
