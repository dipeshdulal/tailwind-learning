import React from "react";
import "./App.css";
import "./tailwind.output.css";

import { Card } from "./Components/Card";
import { HelloWorld } from "./Components/HelloWorld";
import { FlexBox } from "./Components/FlexBox";

function App() {
  return (
    <div className="App">
      <Card />
      <HelloWorld />
      <FlexBox />
    </div>
  );
}

export default App;
