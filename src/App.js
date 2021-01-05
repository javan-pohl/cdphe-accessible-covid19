import React, { useState, useEffect } from "react";
import DailyStats from "./components/DailyStats/DailyStats";
import LatestSnapshot from "./components/LatestSnapshot/LatestSnapshot";
import { API_URL } from "./utils/constants";

import { Home } from "./pages/home";
import "./App.css";
import "tabler-react/dist/Tabler.css";

import { Page } from "tabler-react";

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const cleanData = (data) => {
    const newData = [];

    data.map((attr) => newData.push(...Object.values(attr)));
    //Need to add a sort here, it looks like 2021 is at the top, and 2020 is at the bottom
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
    <div className='App'>
      <Page>
        <Page.Content title='Covid 19 Dashboard'>
          <Home today={data[0]} yesterday={data[1]} />
          <DailyStats data={data} type='Cases' yAccessor='Cases' />
          <DailyStats data={data} type='Hospitalized' yAccessor='Hosp' />
          <DailyStats data={data} type='Deaths' yAccessor='Deaths' />
          <DailyStats data={data} type='Tested' yAccessor='Tested' />
          <LatestSnapshot data={data[0]} />
        </Page.Content>
      </Page>
    </div>
  );
};

export default App;
