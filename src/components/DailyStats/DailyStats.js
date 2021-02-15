import React, { useState } from "react";

import XYGraph from "../Graphs/XYGraph/XYGraph";
import DailyTable from "./DailyTable/DailyTable";
import { Button } from "tabler-react";


const DailyStats = ({data, type, accessors, labels, title}) => {
  const [tableDisplay, setTableDisplay] = useState(false);

  return (
    <React.Fragment>
        <div className="toggle-display" role="button">
            <Button
            className="toggle-button"
            onClick={() => setTableDisplay(false)}
            color={tableDisplay ? "secondary" : "primary"}
            >
            Graph
            </Button>
            <Button
            className="toggle-button"
            onClick={() => setTableDisplay(true)}
            color={tableDisplay ? "primary" : "secondary"}
            >
            Table
            </Button>
        </div>
        {
            tableDisplay ? <DailyTable data={data} accessors={[accessors]} title={title} labels={[labels]}/> : <XYGraph data={data} type={type} yAccessor={accessors} />
        }
    </React.Fragment>
  );
}

export default DailyStats;