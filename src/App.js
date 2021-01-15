import "./App.css";
import "tabler-react/dist/Tabler.css";

import { Button, Form } from "tabler-react";
import React, { useEffect, useState } from "react";

import { API_URL } from "./utils/constants";
import DailyStats from "./components/DailyStats/DailyStats";
import { Home } from "./components/Home/Home";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { sortObjectsByDescendingDate } from "./utils/utilities";

const App = () => {
  const [data, setData] = useState([]);
  const [isDaily, setIsDaily] = useState(true);
  // diffs are weekly if isDaily is false
  const offset = isDaily ? 1 : 7;
  const movementType = isDaily ? "daily" : "weekly";
  const cleanData = (data) => {
    let newData = [];
    data.map((attr) => newData.push(...Object.values(attr)));
    let filteredData = newData.filter((attr) => attr.Date !== null);
    let sortedData = sortObjectsByDescendingDate(filteredData);
    return sortedData;
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

  const handleToggleSubmit = (event) => {
    setIsDaily(!isDaily);
  }

  return (
    <section className='app'>
      <Sidebar />
      <section className='display'>
        <Route exact path='/'>
          <Home current={data[0]} previous={data[offset]} movementType={movementType}/>
        </Route>
        <Route exact path='/daily-cases'>
          <DailyStats data={data} type='Cases' yAccessor='Cases' />
        </Route>
        <Route exact path='/daily-hosp'>
          <DailyStats data={data} type='Hospitalized' yAccessor='Hosp' />
        </Route>
        <Route exact path='/daily-deaths'>
          <DailyStats data={data} type='Deaths' yAccessor='Deaths' />
        </Route>
        <Route exact path='/daily-tested'>
          <DailyStats data={data} type='Tested' yAccessor='Tested' />
        </Route>
        <Button
          className="toggle-daily"
          onClick={handleToggleSubmit}
          color={isDaily ? "primary" : "secondary"}
        >
            {isDaily ? "Daily" : "Weekly"}
        </Button>
      </section>
    </section>
  );
};

export default App;
