import React, { useState, useEffect } from "react";
// import DailyCases from "./components/DailyCases/DailyCases";
// import DailyCasesTable from "./components/DailyCases/DailyCasesTable";
// import DailyDeaths from './components/DailyDeaths/DailyDeaths';
// import DailyTested from './components/DailyTested/DailyTested';
// import DailyHosp from './components/DailyHosp/DailyHosp';
import DailyStats from './components/DailyStats/DailyStats';
import { API_URL } from "./utils/constants";
import "./App.css";
import "tabler-react/dist/Tabler.css";

const App = () => {
  const [data, setData] = useState([]);

  const cleanData = (data) => {
    const newData = [];
    data.map((attr) => newData.push(...Object.values(attr)));
    return newData.filter((attr) => attr.Date !== null);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((resJson) => {
        const cleanedData = cleanData(resJson.features);
        setData(cleanedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <DailyStats
        data={data}
        type="Cases"
        yAccessor="Cases"
      />
      <DailyStats
        data={data}
        type="Hospitalized"
        yAccessor="Hosp"
      />
      <DailyStats
        data={data}
        type="Deaths"
        yAccessor="Deaths"
      />
      <DailyStats
        data={data}
        type="Tested"
        yAccessor="Tested"
      />
    </div>
  );
};

export default App;
