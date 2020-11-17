import React, { useState, useEffect } from 'react';
import Card from './Card/Card'
import { API_URL } from '../../utils/constants';

const cleanData = (data) => {
  const newData = [];
  data.map(attr => newData.push(...Object.values(attr)));
  return newData.filter(attr => attr.Date !== null);
}


const DailyDeaths = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(API_URL)
      .then(res => res.json())
      .then(resJson => {
        const cleanedData = cleanData(resJson.features);
        setData(cleanedData);
      }) 
      .catch(err => console.log(err))
    })

  return (
    <div>
        <Card data={data}/>
    </div>
  );
}

export default DailyDeaths;
