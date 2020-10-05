import React from "react";
import "tabler-react/dist/Tabler.css";
import Graph from '../Graph/Graph';
import DataTable from '../DataTable/DataTable';
import { Card } from "tabler-react";
import './Card.css'


const MyCard = (props) => {
  return (
    <div className="poc-card">
      <Card>
        <Card.Header>
          <Card.Title>Daily Colorado Covid-19 Cases</Card.Title>
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