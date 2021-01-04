import React from "react";
import "../../../../node_modules/tabler-react/dist/Tabler.css";
import Graph from '../Graph/Graph';
import { Card } from "tabler-react";
import './Card.css'


const MyCard = ({data, type, yAccessor}) => {
  return (
    <div className="poc-card">
      <Card>
        <Card.Header>
          <Card.Title>Daily Colorado Covid-19 {type}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Graph data={data} type={type} yAccessor={yAccessor}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;