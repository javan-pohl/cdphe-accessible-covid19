import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { API_URL } from "./utils/constants";

const cleanData = (data) => {
  const newData = [];
  data.map((attr) => newData.push(...Object.values(attr)));
  return newData.filter((attr) => attr.Date !== null);
};

const App = () => {
  const [data, setData] = useState([]);
  console.log("Running App");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((resJson) => {
        const cleanedData = cleanData(resJson.features);
        setData(cleanedData);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className='App'>
      <Card data={data} />
    </div>
  );
};

export default App;
