import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import CarPage from "./components/CarPage/CarPage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Buy from './components/BuyCard/Buy';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/carpage'} component={CarPage}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/buy'} component={Buy}/>
                
                <Route/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
