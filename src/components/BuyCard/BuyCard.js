import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import './BuyCard.css'


function BuyCard() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');




    return (
        <>
            
            {/* <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
            /> */}

           
                
            <div style={{ backgroundColor: 'gold' }} className="Buycard">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/320px-MasterCard_Logo.svg.png"></img>
                <img src="http://pngimg.com/uploads/visa/visa_PNG36.png"></img>

                <form>
                    <input
                        type='tel'
                        name='number'
                        placeholder='номер карты'

                        onChange={e => setNumber(e.target.value)}

                    />
                    <input
                        type='text'
                        name='name'
                        placeholder='Имя'

                        onChange={e => setName(e.target.value)}

                    />

                    <input
                        type='text'
                        name='expiry'
                        placeholder='MM/YY Expiry'

                        onChange={e => setExpiry(e.target.value)}

                    />

                    <input
                        type='tel'
                        name='cvc'
                        placeholder='код проверки'

                        onChange={e => setCvc(e.target.value)}

                    />
                    <div className="form-actions">
                        <button className="btn">Buy</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default BuyCard;