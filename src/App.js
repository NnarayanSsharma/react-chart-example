import React from 'react';
import './App.css';
import LineChart from './components.js/LineChart';

function App() {
  return (
    <div className="App">
      <div className="chart">
        <h1>React Chart Example</h1>
        <hr/>
        <LineChart />
        
      </div>
    </div>
  );
}

export default App;
