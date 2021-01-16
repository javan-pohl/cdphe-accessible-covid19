import "./App.css";
import "tabler-react/dist/Tabler.css";

import React, { useEffect, useState } from "react";

import { Button } from "tabler-react";
import DailyStats from "./components/DailyStats/DailyStats";
import { Home } from "./components/Home/Home";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { getDailyStatistics } from "./utils/apiClient";

const App = () => {
  const [data, setData] = useState([]);
  const [isDaily, setIsDaily] = useState(true);
  // diffs are weekly if isDaily is false
  const offset = isDaily ? 1 : 7;
  const movementType = isDaily ? "daily" : "weekly";

  useEffect(() => {
    getDailyStatistics()
      .then(
        (dailyStats) => setData(dailyStats)
      )
  }, []);

  const handleToggleSubmit = (event) => {
    setIsDaily(!isDaily);
  }

  return (
    <section className='app'>
      <Sidebar />
      <section className='display'>
        <Route exact path='/'>
          <Button
            className="toggle-daily"
            onClick={handleToggleSubmit}
            color={isDaily ? "primary" : "secondary"}
          >
              {isDaily ? "Daily" : "Weekly"}
          </Button>
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
      </section>
    </section>
  );
};

export default App;
