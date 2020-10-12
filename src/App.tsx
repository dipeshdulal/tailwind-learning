import React from "react";
import "./App.css";
import "./tailwind.output.css";

function App() {
  return (
    <div className="App">
      <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <div className="ml-6 pt-1">
          <h1 className="text-2x1 text-blue-700 leading-tight">
            Tailwind and Create React App
          </h1>
          <p className="text-base text-gray-700 loading-normal">
            Building apps together
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
