import React, { useState, useEffect } from "react";
import DailyStats from './components/DailyStats/DailyStats';
import LatestSnapshot from './components/LatestSnapshot/LatestSnapshot';
import Sidebar from './components/Sidebar/Sidebar';
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
    <section className="app">
      <Sidebar />
      <section className="display">
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
        <LatestSnapshot 
          data={data[0]} 
        /> 
      </section>
    </div>
  );
};

export default App;
