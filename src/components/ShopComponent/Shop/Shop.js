import React, {useEffect, useState} from 'react';
import wallCon from './img/wall-connector-gen3@2x.jpg'
import liners from './img/model_y_liners@2x.jpg'
import {Carousel} from "react-bootstrap";
import Header from "../../Header/Header";
import AutoPlay from "../SlickSlider/SlickSlider";
import axios from "axios";
import {API_MERCH} from "../../../Adress";

const Shop = () => {
    let [goods, setGoods] = useState([]);

    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState(null);
    const [numGood, setNumGood] = useState(0);

    useEffect(async () => {
        axios.get(`${API_MERCH}?_limit=9&_page=${page}`).then(res => setGoods(res.data));
        await axios.get(`${API_MERCH}?_limit=9`).then(res => setNumGood(res.headers['x-total-count']));
        countPages()
    },[numGood, page]);

    function countPages(){
        let arrOfPages = [];
        for(let i = 1 ; i <= (Math.ceil(+numGood / 9)); i++){
            arrOfPages.push(i);
        }
        setAllPages(arrOfPages);
        console.log(numGood)
    }

    const addToCart = (item) => {

        let testObj = {
            ...item,
            cartId: Date.now()
        };

        if(JSON.parse(localStorage.getItem('cart'))){
            let arr = JSON.parse(localStorage.getItem('cart'));
            arr.push(testObj);
            localStorage.setItem('cart', JSON.stringify(arr));
        } else {
            let arr = [];
            arr.push(testObj);
            localStorage.setItem('cart', JSON.stringify(arr));
        }
    };

    function searchGoods(str){
        axios.get(`${API_MERCH}?_limit=9&_page=${page}&q=${str}`).then(res => setGoods(res.data));
        setPage(1);
    }

    const addToFavorite = (item) => {
        let testNewObj = {
            ...item,
            cartId: Date.now()
        };

        if(JSON.parse(localStorage.getItem('favorite'))){
            let arr = JSON.parse(localStorage.getItem('favorite'));
            arr.push(testNewObj);
            localStorage.setItem('favorite', JSON.stringify(arr));
        } else {
            let arr = [];
            arr.push(testNewObj);
            localStorage.setItem('favorite', JSON.stringify(arr));
        }
    };



    return (
        <div style={{backgroundColor: 'WhiteSmoke'}} >
            <div>
                <Header/>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption >
                            <h3>WALL CONECTOR</h3>
                            <p>The fastest way to charge at home</p>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src={wallCon}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>MODEL Y LINEARS</h3>
                            <p>The best linears for your TESLA MODEL Y</p>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src={liners}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

            <div className={'container'} >
                <AutoPlay/>
            </div>

            <h3 className={'my-5'} style={{textShadow: '1px 5px 25px'}} >Our Shop:</h3>
            <div>
                <h3 style={{textShadow: '1px 5px 25px'}} >SEARCH </h3><input onChange={(e) => searchGoods(e.target.value)} />
            </div>
            <div className={'d-flex justify-content-center my-2'} >
                {
                    allPages ?  allPages.map(item => (<button key={item + Date.now()} className={'btn btn-dark mx-1'} style={{border: '1px solid', borderRadius: '25px'}} onClick={() => setPage(item)} >{item}</button>)) : <h1>test</h1>
                }
            </div>
            <div className={'container'} >
                <div className={'d-flex flex-wrap justify-content-center'} >
                {
                    goods ?
                        goods.map(item => (
                                <div className={'col-6 col-sm-3 col-md-3 m-md-1 p-1'} style={{boxShadow: '3px 5px 10px',border: '1px solid', borderRadius: '25px'}} key={item.id + 'goods'} >
                                    <img className={'img-fluid p-1'} style={{backgroundColor: 'black', border: '1px solid', borderRadius: '25px'}} src={item.img} />
                                    <p style={{textShadow: '1px 5px 25px'}} >{item.name}</p>
                                    <h5 style={{borderBottom: '1px solid'}} >Price: {item.price}$</h5>
                                    <div className={'my-2'} >
                                        <button onClick={() => addToCart(item)} className={'btn btn-dark'} >Add</button>
                                    </div>
                                        <button onClick={() => addToFavorite(item)} className={'btn btn-dark my-2'}>Favorite</button>
                                </div>
                            )
                        ) : null
                }
                </div>
            </div>
        </div>

    );

};

export default Shop;
