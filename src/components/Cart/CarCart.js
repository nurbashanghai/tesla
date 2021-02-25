import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {API_REGISTRATION} from "../../Adress";

const CarCart = () => {
    let history = useHistory();
    let [goods, setGoods] = useState([]);
    let [totalPrice, setTotalPrice] = useState(0);
    let [user, setUser] = useState({});
    let [modal, setModal] = useState(false);

    useEffect( () => {
        let arr = JSON.parse(localStorage.getItem('cart'));
        setGoods(arr);
        axios.get(`${API_REGISTRATION}/${JSON.parse(localStorage.getItem('currentUser')).id}`).then(res => setUser(res.data));
    }, []);

    useEffect(() => {
        let price = totalPrice;
        goods.map((item) => price += +item.price);
        setTotalPrice(price);
    },[goods]);

    const deleteItem = (id) => {
        let arr = goods;
        const newArr = arr.filter(item => item.cartId !== id);
        localStorage.setItem('cart', JSON.stringify(newArr));
        setGoods(newArr);
        setTotalPrice(0);
    };

    function buy(){
        history.push('/checkout');
    }

    return (
        <div>
            <Header/>
            <h4>CART:</h4>
            <h5>Total Price ${totalPrice}</h5>
            <div className={'container'} >
                {
                    goods?.[0] ? <button onClick={buy} className={'btn btn-primary'} >Buy</button> : null
                }
            {
                goods?.[0] ?
                    goods.map((item) => (
                        <div className={'col-12'} key={item.cartId}>
                            <div className={'d-flex'} >
                                <div className={'col-6 col-md-4'} >
                                    <img className={'img-fluid'} src={item.img}/>
                                </div>
                                <div>
                                    <p>Name: {item.name}</p>
                                    <p>Price: {item.price}$</p>
                                    <button onClick={() => deleteItem(item.cartId)} className={'btn btn-danger'} >Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                    : <h5>NOTHING TO SHOW</h5>
            }
            </div>

            { user.buyHistory ? (

                <div>
                    <button onClick={() => setModal(!modal)}>Show/Hide History</button>
                    {
                        modal ?
                            <div className={'container d-flex flex-column'} style={{border: '1px solid black'}}>
                                <h4>Spent: {user.buyHistory.totalPrice}$</h4>
                                {
                                    user.buyHistory.buyed.map((item, index) => (
                                        <div className={'col-12 m-2'} key={index + 'buyed'}>
                                            <div>NAME: {item.name}</div>
                                            <div>PRICE: {item.price}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            : null
                    }
                </div>
                )
                : null
            }

        </div>
    );
};

export default CarCart;
