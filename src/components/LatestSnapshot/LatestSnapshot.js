import React from "react";
import { Table } from "tabler-react";
import './LatestSnapshot.css'

const LatestSnapshot = (props) => {
  const { data } = props; 

  return (
    <Table className="snapshot">
      <Table.Header>
        <tr>
          <Table.ColHeader>Date</Table.ColHeader>
          <Table.ColHeader>Daily Colorado Covid-19 Statistics</Table.ColHeader>
        </tr>
      </Table.Header>
      <Table.Body>
        {data && Object.keys(data).map((key) => (
          <Table.Row key={key}>
            <Table.Col>{key}</Table.Col>
            <Table.Col>{data[key]}</Table.Col>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default LatestSnapshot;