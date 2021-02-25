import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import CarPage from "./components/CarPage/CarPage";
import Register from "./components/Auth/Register";
import Shop from "./components/ShopComponent/Shop/Shop";
import Admin from "./components/Admin/Admin";
import CarCart from "./components/Cart/CarCart";
import Favorite from "./components/Favorite/Favorite";
import CheckoutForm from "./components/BuyCard/CheckOutForm";
import BuyCard from "./components/BuyCard/BuyCard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/carpage'} component={CarPage}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/shop'} component={Shop}/>
                <Route exact path={'/admin'} component={Admin}/>
                <Route exact path={'/cart'} component={CarCart} />
                <Route exact path={'/favorite'} component={Favorite} />
                <Route exact path={'/checkout'} component={CheckoutForm}/>
                <Route exact path={'/buy'} component={BuyCard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
