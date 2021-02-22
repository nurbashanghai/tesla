import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import CarPage from "./components/CarPage/CarPage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Buy from './components/BuyCard/Buy';


import Header from "./components/Header/Header";
import Shop from "./components/ShopComponent/Shop/Shop";
// import Header from "./components/Header/Header";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/carpage'} component={CarPage}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/login'} component={Login}/>
<<<<<<< HEAD
                <Route exact path={'/buy'} component={Buy}/>
                
                <Route/>
=======
                <Route exact path={'/shop'} component={Shop}/>
>>>>>>> 69fd72823fe090b64fdb94198f9a948a7ac9b802
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
