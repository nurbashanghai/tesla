import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";

const CarCart = () => {
    let [goods, setGoods] = useState([]);
    let [totalPrice, setTotalPrice] = useState(0);

    useEffect( () => {
        let arr = JSON.parse(localStorage.getItem('cart'));
        setGoods(arr);
    }, []);

    useEffect(() => {
        let price = totalPrice;
        goods.map((item) => price += +item.price);
        setTotalPrice(price);
    },[goods]);

    return (
        <div>
            <Header/>
            <h4>CART:</h4>
            <h5>Total Price ${totalPrice}</h5>
            <div className={'container'} >
            {
                goods ?
                    goods.map(item => (
                        <ul className={'col-12'} key={item.id+'cart'}>
                            <div className={'d-flex'} >
                                <div className={'col-6 col-md-4'} >
                                    <img className={'img-fluid'} src={item.img}/>
                                </div>
                                <div>
                                    <p>Name: {item.name}</p>
                                    <p>Price: {item.price}$</p>
                                </div>

                            </div>
                        </ul>
                    ))
                    : <h5>NOTHING TO SHOW</h5>
            }
            </div>
        </div>
    );
};

export default CarCart;
