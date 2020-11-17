import React from "react";
import "../../../../node_modules/tabler-react/dist/Tabler.css";
import Graph from '../Graph/Graph';
import DataTable from '../DataTable/DataTable';
import { Card } from "tabler-react";
import './Card.css'


const MyCard = (props) => {
  return (
    <div className="poc-card">
      <Card>
        <Card.Header>
          <Card.Title>Total Colorado Covid-19 Tested</Card.Title>
        </Card.Header>
        <Card.Body>
          <Graph data={props.data}/>
          <DataTable data={props.data} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;