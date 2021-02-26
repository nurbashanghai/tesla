import React, {useEffect} from "react";
import './App.css';
import Routes from "./Routes";
import CarContext from "./components/Contexts/CarContext";
import Footer from "./components/Footer/Footer";

function App() {

    useEffect(() => {
        if(window.location.pathname === '/'){
            window.location.pathname = '/home'
        }
    }, []);

  return (
    <div className="App" style={{backgroundColor: 'WhiteSmoke'}}>
        <CarContext>
            <Routes/>
            <Footer/>
        </CarContext>
    </div>
  );
}

export default App;
