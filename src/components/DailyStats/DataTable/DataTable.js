import React from "react";
import { Table } from "tabler-react";

const DataTable = (props) => {
  const { data, type } = props; 

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.ColHeader>Date</Table.ColHeader>
          <Table.ColHeader>Daily Colorado Covid-19 {type}</Table.ColHeader>
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
    </div>
  );
};

export default DataTable;