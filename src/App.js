import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>

            {/*<Switch>*/}
            {/*    <Route exact path="/" component={Home}/>*/}
            {/*    <Route exact path="/about" component={About}/>*/}
            {/*    <Route exact path="/store" component={Store}/>*/}
            {/*    <Route exact path="/series" component={SeriesHome}/>*/}
            {/*</Switch>*/}
        </Router>
    </div>
  );
}

export default App;
