import React from "react";
import Nav from "./Nav";
import PigsList from './PigsList';
import hogs_data from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <PigsList hogs={hogs_data}/>
    </div>
  );
}

export default App;
