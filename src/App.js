import React from 'react';
import DailyCases from './components/DailyCases/DailyCases';
import DailyDeaths from './components/DailyDeaths/DailyDeaths';
import DailyTested from './components/DailyTested/DailyTested';
import DailyHosp from './components/DailyHosp/DailyHosp';

import './App.css';

const App = () => {
  return (
    <div className="App">
        <DailyCases />
        <DailyDeaths />
        <DailyTested />
        <DailyHosp />
    </div>
  );
}

export default App;
