import "./App.css";
import "tabler-react/dist/Tabler.css";

import React, { useEffect, useState } from "react";
import { getDailyStatistics, getTestingStatistics } from "./utils/apiClient";

import BarPlot from "./components/BarPlot/BarPlot";
import { Button } from "tabler-react";
import Card from "./components/Card/Card";
import Graph from './components/Graph/Graph';
import { Home } from "./components/Home/Home";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

;

const App = () => {
  const [data, setData] = useState([]);
  const [pcrTestData, setPcrTestData] = useState([]);
  const [antibodyTestData, setAntibodyTestData] = useState([]);
  const [isDaily, setIsDaily] = useState(true);
  // diffs are weekly if isDaily is false
  const offset = isDaily ? 1 : 7;
  const movementType = isDaily ? "daily" : "weekly";

  useEffect(() => {
    getDailyStatistics()
      .then(
        (dailyStatsData) => setData(dailyStatsData)
      )
    getTestingStatistics('pcr')
      .then(
        (data) => {
          setPcrTestData(data);
        }
      )
    getTestingStatistics('antibody')
      .then(
        (data) => {
          setAntibodyTestData(data);
        }
      )
  }, []);

  const handleToggleDailyClick = (event) => {
    setIsDaily(!isDaily);
  }
  console.log('pcrTestData: ', pcrTestData);
  return (
    <section className='app'>
      <Sidebar />
      <section className='display'>
        <Route exact path='/'>
          <Button
            className="toggle-daily"
            onClick={handleToggleDailyClick}
            color={isDaily ? "primary" : "secondary"}
          >
              {isDaily ? "Daily" : "Weekly"}
          </Button>
          <Home current={data[0]} previous={data[offset]} movementType={movementType}/>
        </Route>
        <Route exact path='/daily-cases' >
          <Card title="Daily Colorado Covid-19 Cases">
            <Graph data={data} type={'Cases'} yAccessor={'Cases'}/>
          </Card>
        </Route>
        <Route exact path='/daily-hosp'>
          <Card title="Daily Colorado Covid-19 Hospitalized">
            <Graph data={data} type={'Hospitalized'} yAccessor={'Hosp'}/>
          </Card>
        </Route>
        <Route exact path='/daily-deaths'>
          <Card title="Daily Colorado Covid-19 Deaths">
            <Graph data={data} type={'Deaths'} yAccessor={'Deaths'}/>
          </Card>

        </Route>
        <Route exact path='/daily-tested'>
          <Card title="Daily Colorado Covid-19 Tested">
            <Graph data={data} type={'Tested'} yAccessor={'Tested'}/>
          </Card>
          <Card title="Daily PCR Tests Administered">
              <BarPlot
                data={pcrTestData}
               />
          </Card>
        </Route>
      </section>
    </section>
  );
};

export default App;
