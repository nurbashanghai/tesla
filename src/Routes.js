import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import CarPage from "./components/CarPage/CarPage";
import Shop from "./components/ShopComponent/Shop/Shop";
import Admin from "./components/Admin/Admin";
import CarCart from "./components/Cart/CarCart";
import Favorite from "./components/Favorite/Favorite";
import CheckoutForm from "./components/BuyCard/CheckOutForm";
import BuyCard from "./components/BuyCard/BuyCard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CarCheckoutForm from "./components/BuyCard/CarCheckOutForm";
import CarPaymentForm from './components/BuyCard/BuyCar';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/carpage'} component={CarPage}/>
                <Route exact path={'/login'} component = {Login}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/shop'} component={Shop}/>
                <Route exact path={'/admin'} component={Admin}/>
                <Route exact path={'/cart'} component={CarCart} />
                <Route exact path={'/favorite'} component={Favorite} />
                <Route exact path={'/checkout'} component={CheckoutForm}/>
                <Route exact path={'/buy'} component={BuyCard} />
                <Route exact path={'/carorder'} component={CarCheckoutForm}/>
                <Route exact path={'/carpay'} component={CarPaymentForm}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
