import React from "react";
import { Button } from "tabler-react";


const DisplaySelector = ({tableDisplay, setTableDisplay}) => {
  return (
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
  );
}

export default DisplaySelector;