import "./App.css";
import "tabler-react/dist/Tabler.css";

import React, { useEffect, useState } from "react";
import { getDailyStatistics, getTestingStatistics } from "./utils/apiClient";

import Card from "./components/Card/Card";
import { Home } from "./components/Home/Home";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [data, setData] = useState([]);
  const [pcrTestData, setPcrTestData] = useState([]);
  const [antibodyTestData, setAntibodyTestData] = useState([]);

  useEffect(() => {
    getDailyStatistics().then((dailyStatsData) => setData(dailyStatsData));
    getTestingStatistics("pcr").then((data) => {
      setPcrTestData(data);
    });
    getTestingStatistics("antibody").then((data) => {
      setAntibodyTestData(data);
    });
  }, []);
    
  return (
    <section className="app">
      <Sidebar />
      <section className="display">
        <Route exact path="/">
          {data && <Home data={data.slice(0, 8)} />}
        </Route>
        <Route exact path="/daily-cases">
          <Card 
            data={data} 
            topic={"Cases"} 
            graphType={"XY"}
            accessors={"Cases"} 
            dateCap={true}
            title="Daily Colorado Covid-19 Cases"
            labels={"Total Cases"} 
          />
        </Route>
        <Route exact path="/daily-hosp">
          <Card 
            data={data} 
            topic={"Hospitalized"} 
            graphType={"XY"}
            accessors={"Hosp"} 
            dateCap={true}
            title={"Daily Colorado Covid-19 Hospitalized"} 
            labels={"Hospitalizations From C19"}
          />
        </Route>
        <Route exact path="/daily-deaths">
          <Card 
            data={data} 
            topic={"Deaths"} 
            graphType={"XY"}
            accessors={"Deaths"} 
            dateCap={true}
            title="Daily Colorado Covid-19 Deaths"
            labels={"Deaths Among Cases"}
          />
        </Route>
        <Route exact path="/daily-tested">
          <Card 
            data={data} 
            topic={"Tested"} 
            graphType={"XY"}
            accessors={"Tested"} 
            dateCap={true}
            title="Daily Colorado Covid-19 Tested"
            labels={"Tested For The First Time"}
          />
          <Card
            data={pcrTestData}
            fillColors={["#0000FF", "#FF6945"]}
            graphType={"StackedBar"}
            accessors={["testedAtCommercialLabs", "testedAtStateLabs"]}
            title={"Daily PCR Tests Administered"}
            dateCap={false}
            labels={["Commercial Labs", "State Labs"]}
          />
          <Card
            data={antibodyTestData}
            fillColors={["#FF6945", "#0000FF"]}
            graphType={"StackedBar"}
            accessors={["positiveTests", "negativeTests"]}
            title={"Daily Antibody Tests Administered"}
            dateCap={false}
            labels={["Positive", "Negative"]}
          />
        </Route>
      </section>
    </section>
  );
};

export default App;
