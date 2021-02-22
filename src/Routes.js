import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import CarPage from "./components/CarPage/CarPage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

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
                <Route exact path={'/shop'} component={Shop}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
