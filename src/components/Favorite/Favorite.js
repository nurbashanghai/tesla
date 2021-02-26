import React, { Component } from 'react';
import SitePath from '../SidePath/SidePath';
import './Favorite.css'
import Header from "../Header/Header";

class Favorite extends Component {
    constructor(props) {
        super(props);
        const favoriteKeyData = localStorage.favoriteKey ? JSON.parse(localStorage.favoriteKey) : [];
        this.state = {
            favoriteData: favoriteKeyData,
            page: 1,
            pages: Math.ceil(favoriteKeyData.length / 12),
            sortParam: 'date'
        };
    };

    componentDidMount() {
        ;
        this.setState({
            favoriteData: JSON.parse(localStorage.getItem('favorite'))
        })
    }



    favoriteRemove = (itemID) => {
        const favoriteFilter = this.state.favoriteData.filter((item) => itemID === item.id);
        const tempfavoriteData = [...this.state.favoriteData];
        if (favoriteFilter.length > 0 && favoriteFilter[0].id === itemID) {
            const removeData = this.state.favoriteData.indexOf(favoriteFilter[0]);
            tempfavoriteData.splice(removeData, 1);
            this.setState({
                favoriteData: tempfavoriteData,
                isActive: false,
                pages: Math.ceil(tempfavoriteData.length / 12)
            });
            if (tempfavoriteData.length < 13) {
                this.setState({
                    page: 1
                });
            };
            const serialTempData = JSON.stringify(tempfavoriteData);
            localStorage.setItem("favoriteKey", serialTempData);
            localStorage.setItem("favorite", serialTempData);
        };
    };

    GetNoun = (number, one, two, five, none) => {
        number = Math.abs(number);
        number %= 100;
        if (!number) {
            return none;
        };
        if (number >= 5 && number <= 20) {
            return five;
        };
        number %= 10;
        if (number === 1) {
            return one;
        };
        if (number >= 2 && number <= 4) {
            return two;
        };
        return five;
    };

    render() {
        const { favoriteData,page } = this.state;
        return (
            <div>
                <Header/>
                <main>
                    <section>
                        <div >
                            <h2 >В вашем избранном</h2>
                            <span >{favoriteData.length > 0 && favoriteData.length} {this.GetNoun(favoriteData.length, 'товар', 'товара', 'товаров', 'нет товаров')}</span>
                        </div>
                    </section>
                    <div style={{ display: 'flex', flexWrap: 'wrap'}}>

                        {favoriteData.length >= 0 && favoriteData.slice((page - 1) * 12, page * 12).map(items =>
                            <div style={{width: '18rem',margin:'25px'}}>
                                <div className={'col-6 col-md-12'} style={{background: `url(${items.img}) no-repeat center center`, backgroundSize: 'cover', width: '300px', height: '300px',border: '1px solid' }}>
                                </div>
                                <div style={{border: '1px solid'}}>

                                    <h5 style={{maop:'50px',bottom:'50px'}}>{items.name}{items.price}</h5>
                                    <button onClick={() => this.favoriteRemove(items.id)} type="button" class="btn btn-outline-danger">Delete</button>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        );
    };
};

export default Favorite;
