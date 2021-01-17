import "./App.css";
import "tabler-react/dist/Tabler.css";

import { Button, Card } from "tabler-react";
import React, { useEffect, useState } from "react";
import { getDailyStatistics, getTestingStatistics } from "./utils/apiClient";

import BarPlot from "./components/DailyStats/BarPlot/BarPlot";
import DailyStats from "./components/DailyStats/DailyStats";
import { Home } from "./components/Home/Home";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

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
          <Card>
            <Card.Header>
              <Card.Title>Daily PCR Tests Administered</Card.Title>
            </Card.Header>
            <Card.Body>
              <BarPlot
                data={pcrTestData}
                oAccessor={"date"}
                rAccessor={['testedAtCommercialLabs', 'testedAtStateLabs']}
             />
            </Card.Body>
          </Card>
        </Route>
      </section>
    </section>
  );
};

export default App;
