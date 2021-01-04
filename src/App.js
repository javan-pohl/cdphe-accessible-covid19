import React, { useState, useEffect } from "react";
import DailyCases from "./components/DailyCases/DailyCases";
import DailyCasesTable from "./components/DailyCases/DailyCasesTable";
import DailyDeaths from './components/DailyDeaths/DailyDeaths';
import DailyTested from './components/DailyTested/DailyTested';
import DailyHosp from './components/DailyHosp/DailyHosp';
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

  let latest = {};
  latest = data.slice(-1)[0];

  return (
    <div className="App">
      <DailyCases data={data} />
      <DailyCasesTable data={latest} />
      <DailyDeaths />
      <DailyTested />
      <DailyHosp />
    </div>
  );
};

export default App;
