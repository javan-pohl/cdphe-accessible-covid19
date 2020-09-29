import React from "react";
import "tabler-react/dist/Tabler.css";
import { formatComma, formatDate } from '../../utils/utilities'
import { Table } from "tabler-react";
import './DataTable.css'

const DataTable = (props) => {
  return (
      <div className="data-table">
        <Table>
          <Table.Header>
            <Table.ColHeader>Date</Table.ColHeader>
            <Table.ColHeader>Total Cases</Table.ColHeader>
          </Table.Header>
          <Table.Body>
            { props.data.map((day, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Col>{formatDate(day.Date)}</Table.Col>
                  <Table.Col>{formatComma(day.Cases)}</Table.Col>
                </Table.Row>
              )
            })}              
          </Table.Body>
        </Table>
      </div>
  );
}

export default DataTable;