import React, { useState, useEffect } from "react";
import DailyStats from './components/DailyStats/DailyStats';
import LatestSnapshot from './components/LatestSnapshot/LatestSnapshot';
import Sidebar from './components/Sidebar/Sidebar';
import { API_URL } from "./utils/constants";
import "./App.css";
import "tabler-react/dist/Tabler.css";
import { Route } from "react-router-dom";

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
        <Route exact path="/">
          <LatestSnapshot 
            data={data[0]} 
          /> 
        </Route>
        <Route exact path="/daily-cases">
          <DailyStats
            data={data}
            type="Cases"
            yAccessor="Cases"
          />
        </Route>
        <Route exact path="/daily-hosp">
          <DailyStats
            data={data}
            type="Hospitalized"
            yAccessor="Hosp"
          />
        </Route>
        <Route exact path="/daily-deaths">
          <DailyStats
            data={data}
            type="Deaths"
            yAccessor="Deaths"
          />
        </Route>
        <Route exact path="/daily-tested">
          <DailyStats
            data={data}
            type="Tested"
            yAccessor="Tested"
          />
        </Route>
      </section>
    </section>
  );
};

export default App;
