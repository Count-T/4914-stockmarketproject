import logo from "./logo.svg";
import "./App.css";
import { React, useEffect, useState } from "react";
import Header from "./Components/Header";
import LineChart from "./Components/LineChart";
function App() {
  return (
    <div className="App">
      <Header />
      <LineChart />
    </div>
  );
}

export default App;
