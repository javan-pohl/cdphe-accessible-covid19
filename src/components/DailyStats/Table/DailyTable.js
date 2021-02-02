import './Table.css'
import React from "react";

const DailyTable = ({data}) => {
  const generateRows = (data) => {
    return data.map(point => {
      const { Date, Test_Encounters, Tested, Rate, Cases, Hosp, Deaths } = point;

      return (
          <tr key={Date} >
            <th scope="row">{Date}</th>
            <td>{Test_Encounters}</td>
            <td>{Tested}</td>
            <td>{Rate}</td>
            <td>{Cases}</td>
            <td>{Hosp}</td>
            <td>{Deaths}</td>
          </tr>
      )
    })
  }

  return (
    <div className="poc-table-wrapper">
      <table className="poc-table">
        <caption>Daily Statistics:</caption>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Test Encounters</th>
          <th scope="col">Tested</th>
          <th scope="col">Rate</th>
          <th scope="col">Cases</th>
          <th scope="col">Hospitalizations</th>
          <th scope="col">Deaths</th>
        </tr>
        {
          generateRows(data)
        }
      </table>
    </div>
  );
}

export default DailyTable;