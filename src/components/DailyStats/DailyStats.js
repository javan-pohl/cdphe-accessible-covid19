import React, { useState } from "react";

import XYGraph from "./XYGraph/XYGraph";
import DailyTable from "./DailyTable/DailyTable";
import { Button } from "tabler-react";


const DailyStats = ({data, type, yAccessor}) => {
  const [tableDisplay, setTableDisplay] = useState(false);

  return (
    <React.Fragment>
        <div className="toggle-display" role="button">
            <Button
            className="weekly"
            onClick={() => setTableDisplay(false)}
            color={tableDisplay ? "secondary" : "primary"}
            >
            Graph
            </Button>
            <Button
            className="daily"
            onClick={() => setTableDisplay(true)}
            color={tableDisplay ? "primary" : "secondary"}
            >
            Table
            </Button>
        </div>
        {
            tableDisplay ? <DailyTable data={data} /> : <XYGraph data={data} type={type} yAccessor={yAccessor} />
        }
    </React.Fragment>
  );
}

export default DailyStats;