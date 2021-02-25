import React, { Component } from 'react';
import './Favorite.css'
import SitePath from "../SidePath/SidePath";

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

    componentDidMount(){;
        this.setState({
            favoriteData: JSON.parse(localStorage.getItem('favorite'))
        })
    }


    favoriteRemove = (event, itemID) => {
        event.preventDefault();
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
        const { favoriteData, sortParam, page, pages } = this.state;
        return (
            <div className="wrapper wrapper_favorite">
                <SitePath mainUrlparam={{ to: '/favorite', title: 'Избранное' }} />
                <main className="product-catalogue product-catalogue_favorite">
                    <section className="product-catalogue__head product-catalogue__head_favorite">
                        <div className="product-catalogue__section-title">
                            <h2 className="section-name">В вашем избранном</h2>
                            <span className="amount amount_favorite">{favoriteData.length > 0 && favoriteData.length} {this.GetNoun(favoriteData.length, 'товар', 'товара', 'товаров', 'нет товаров')}</span>
                        </div>
                    </section>
                    <section className="product-catalogue__item-list product-catalogue__item-list_favorite">
                        {favoriteData.length > 0 && favoriteData.slice((page - 1) * 12, page * 12).map(items =>

                            <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-between'}}>
                                <ul>
                                    <li>

                                    </li>
                                    <img src={items.img}/>
                                    {items.name}
                                    {items.price}
                                </ul>
                            </div>


                        )}
                    </section>

                </main>
            </div>
        );
    };
};

export default Favorite;
