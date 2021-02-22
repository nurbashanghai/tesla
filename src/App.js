import React from "react";
import './App.css';
import Routes from "./Routes";
import CarContext from "./components/Contexts/CarContext";

function App() {
  return (
    <div className="App">
        <CarContext>
            <Routes/>
        </CarContext>
    </div>
  );
}

export default App;
