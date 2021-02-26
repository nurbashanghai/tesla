import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './BuyCard.css'
import Header from "../Header/Header";
import axios from "axios";
import {API_REGISTRATION} from "../../Adress";
import { withRouter } from 'react-router-dom'

class CarPaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
        car: {}
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    componentDidMount() {
        this.setState({
            car: JSON.parse(localStorage.getItem('carOrder'))
        })
    }

    buy = async () => {
        let arr = {
            car: {
                ...this.state.car
            }
        };
        await axios.patch(`${API_REGISTRATION}/${JSON.parse(localStorage.getItem('currentUser')).id}`, arr);
        localStorage.setItem('carOrder', '[]');
        alert('Куплено! Проверьте в истории заказов');
        window.location.pathname = '/home'
    };

    render() {
        const { location, history } = this.props;
        return (
            <div className="PaymentForm">
                <Header/>
                <div className={'d-flex flex-column my-5'} >
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <h3>TOTAL: {this.state.totalPrice}$</h3>
                    <input className="inp"
                           type="tel"
                           name="number"
                           placeholder="Card Number"
                           onChange={this.handleInputChange}
                           onFocus={this.handleInputFocus}
                    />
                    <input className="inp"
                           type="text"
                           name="name"
                           placeholder="name"
                           onChange={this.handleInputChange}
                           onFocus={this.handleInputFocus}
                    />
                    <input className="inp"
                           type="tel"
                           name="expiry"
                           placeholder="expiry"
                           onChange={this.handleInputChange}
                           onFocus={this.handleInputFocus}
                    />
                    <input className="inp"
                           type="tel"
                           name="cvc"
                           placeholder="cvc"
                           onChange={this.handleInputChange}
                           onFocus={this.handleInputFocus}
                    />
                    <div>
                        <button onClick={() => this.buy()} className="btn btn-primary col-7 ">Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CarPaymentForm);
