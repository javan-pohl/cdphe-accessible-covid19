import './DataTable.css'
import React from "react";

const DataTable = ({data, dateCap, accessors, title, labels}) => {
  const accessorsParse = typeof accessors === "object" ? accessors : [accessors];
  const labelsParse = typeof labels === "object" ? labels : [labels];
  //need to better normalize date casing at a higher level
  const dateKey = dateCap ? 'Date' : 'date';

  const generateHeaders = labels => {
    return (
      <tr>
        <th scope="col">Date</th>
        {
          labels.map(label => <th key={label} scope="col">{label}</th>)
        }
      </tr>
    )
  }

  const generateRows = (data, accessors) => {  
    return data.map(point => {
      return (
          <tr key={point[dateKey]}>
            <th scope="row" key={point[dateKey]}>{point[dateKey]}</th>
            {
              accessors.map(column => {
                return (
                  <td key={column}>{point[column]}</td>
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
          generateHeaders(labelsParse)
        }
        <tbody>
          {
            generateRows(data, accessorsParse)
          }
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;