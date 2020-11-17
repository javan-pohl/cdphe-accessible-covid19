import React from "react";
import "tabler-react/dist/Tabler.css";
import { formatComma, formatDate } from '../../../utils/utilities'
import { Table } from "tabler-react";
import './DataTable.css'
import '../../../App.css'

const DataTable = (props) => {
  return (
      <div className="sr-only">
        <Table>
          <Table.Header>
            <Table.ColHeader>Date</Table.ColHeader>
            <Table.ColHeader>Total People Tested</Table.ColHeader>
          </Table.Header>
          <Table.Body>
            { props.data.map((day, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Col>{formatDate(day.Date)}</Table.Col>
                  <Table.Col>{formatComma(day.Tested)}</Table.Col>
                </Table.Row>
              )
            })}              
          </Table.Body>
        </Table>
      </div>
  );
}

export default DataTable;