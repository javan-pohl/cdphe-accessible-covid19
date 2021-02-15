import './DailyTable.css'
import React from "react";

const DailyTable = ({data, accessors, title, labels}) => {
  const generateHeaders = labels => {
    return (
      <tr>
        <th scope="col">Date</th>
        {
          labels.map(label => <th scope="col">{label}</th>)
        }
      </tr>
    )
  }

  const generateRows = (data, accessors) => {  
    return data.map(point => {
      return (
          <tr key={point['date']} >
            <th scope="row">{point['Date']}</th>
            {
              accessors.map(column => {
                return (
                  <td>{point[column]}</td>
                )
              })
            }
          </tr>
      )
    })
  }

  return (
    <div className="poc-table-wrapper">
      <table className="poc-table">
        <caption>{title}:</caption>
        {
          generateHeaders(labels)
        }
        {
          generateRows(data, accessors)
        }
      </table>
    </div>
  );
}

export default DailyTable;