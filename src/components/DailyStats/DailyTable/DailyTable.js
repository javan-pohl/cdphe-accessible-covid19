import './DailyTable.css'
import React from "react";

const DailyTable = ({data, yAccessor}) => {
  const generateRows = (data) => {
    return data.map(point => {
      return (
          <tr key={point['date']} >
            <th scope="row">{point['Date']}</th>
            <td>{point[yAccessor]}</td>
          </tr>
      )
    })
  }

  const labelAliases = {
    name: "State",
    desc_: "Description",
    tested: "Tested For The First Time",
    test_encounters: "People Tested",
    deaths: "Deaths Among Cases",
    dthcovid19: "Deaths From C19",
    hosp: "Hospitalizations From C19",
    counties: "Counties Reporting Cases",
    rate: "Infection Rate Per 100,000"
  }
  
  const getLabelAlias = (label) => {
    let labelLower = label.toLowerCase();
    if (labelLower in labelAliases) {
      return labelAliases[labelLower];
    }
    return label
  }

  let labelAlias = getLabelAlias(yAccessor);

  return (
    <div className="poc-table-wrapper">
      <table className="poc-table">
        <caption>Daily {labelAlias}:</caption>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">{labelAlias}</th>
        </tr>
        {
          generateRows(data)
        }
      </table>
    </div>
  );
}

export default DailyTable;