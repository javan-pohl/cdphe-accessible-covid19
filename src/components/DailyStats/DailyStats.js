import React, { useState } from "react";

import Graph from "./Graph/Graph";
import Table from "./Table/Table";
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
            tableDisplay ? <Table data={data} /> : <Graph data={data} type={type} yAccessor={yAccessor} />
        }
    </React.Fragment>
  );
}

export default DailyStats;