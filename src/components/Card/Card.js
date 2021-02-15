import "../../../node_modules/tabler-react/dist/Tabler.css";
import './Card.css'

import { Card } from "tabler-react";
import React, { useState } from "react";
import XYGraph from "../Graphs/XYGraph/XYGraph";
import StackedBarPlot from "../Graphs/StackedBarPlot/StackedBarPlot";
import DisplaySelector from "../DisplaySelector/DisplaySelector";
import DataTable from "../DataTable/DataTable";

const MyCard = ({data, topic, graphType, dateCap, accessors, fillColors, labels, title}) => {
  const [tableDisplay, setTableDisplay] = useState(false);

  const displayCardType = type => {
    switch(type) {
      case 'StackedBar':
        return (
          <StackedBarPlot
              data={data}
              fillColors={fillColors}
              rAccessor={accessors}
              title={title}
              rLabels={labels}
          />
        );
      default:
        return (
          <XYGraph 
            data={data} 
            topic={topic} 
            yAccessor={accessors} 
          />
        );
    }
  }


  return (
    <div className="poc-card">
      <Card>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <DisplaySelector 
            tableDisplay={tableDisplay}
            setTableDisplay={setTableDisplay}
          />
          {
            tableDisplay ? <DataTable data={data} dateCap={dateCap} accessors={accessors} title={title} labels={labels}/> : displayCardType(graphType)
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;