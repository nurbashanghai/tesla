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
            <h4 style={{textShadow: '1px 5px 25px'}} className={'mt-5'} >CART:</h4>
            <h5 style={{textShadow: '1px 5px 25px'}} >Total Price ${totalPrice}</h5>
            {
                goods?.[0] ? <button style={{borderRadius: '15px'}} onClick={buy} className={'btn btn-dark my-5'} >Buy</button> : null
            }
            <div className={'container d-flex flex-wrap'} >
            {
                goods?.[0] ?
                    goods.map((item) => (
                        <div className={'col-6 col-md-3'} key={item.cartId}>
                            <div className={'col-12 col-sm-3 col-md-12 m-md-1 p-1'} style={{boxShadow: '3px 5px 10px',border: '1px solid', borderRadius: '25px'}} key={item.id + 'goods'} >
                                <img className={'img-fluid p-1'} style={{backgroundColor: 'black', border: '1px solid', borderRadius: '25px'}} src={item.img} />
                                <p>{item.name}</p>
                                <h5 style={{borderBottom: '1px solid'}} >Price: {item.price}$</h5>
                                <div className={'my-2'} >
                                    <button onClick={() => deleteItem(item.cartId)} className={'btn btn-danger'} >Remove</button>
                                </div>
                            </div>

                        </div>
                    ))
                    : <h5>NOTHING TO SHOW</h5>
            }
            </div>

            { user.buyHistory ? (

                <div className={'my-5'} >
                    <button className={'btn btn-dark'} style={{borderRadius: '15px'}} onClick={() => setModal(!modal)}>Show/Hide History</button>
                    {
                        modal ?
                            <div className={'container d-flex flex-column my-5'} >
                                <h4> Purchase History: </h4>
                                <h5>Spent: {user.buyHistory.totalPrice}$</h5>
                                {
                                    user.buyHistory.buyed.map((item, index) => (
                                        <div className={'col-12 m-2 mb-5'}  key={index + 'buyed'}>
                                            <h5>NAME: {item.name}  PRICE: {item.price}$</h5>
                                            <img className={'img-fluid p-1 col-7 col-md-2'} src={item.img} />
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

            { user.car ? (

                    <div className={'my-5'} >
                                <div className={'container d-flex flex-column my-5'} style={{border: '1px solid black'}}>
                                    <h4>Car Purchase History: </h4>
                                            <div className={'col-12 m-2'} style={{borderBottom: '1px solid black'}} >
                                                <p>NAME: {user.car.name}  PRICE: {user.car.price}$</p>
                                                <p>Version: {user.car.specs.version}</p>
                                                <p>Color: {user.car.choosenColor}</p>
                                                <img className={'img-fluid p-1 col-7 col-md-2'} src={`${user.car[`img_${user.car.choosenColor}`][0]}`} />
                                            </div>
                                </div>
                    </div>
                )
                : null
            }

        </div>
    );
};

export default CarCart;
