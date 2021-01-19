import "../../../node_modules/tabler-react/dist/Tabler.css";
import './Card.css'

import { Card } from "tabler-react";
import Graph from '../Graph/Graph';
import React from "react";

const MyCard = (props) => {
  return (
    <div className="poc-card">
      <Card>
        <Card.Header>
          <Card.Title>{props.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          {props.children}
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;