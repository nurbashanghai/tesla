import React from 'react';

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor: 'black', color: 'white'}} className={'d-flex flex-wrap justify-content-around mt-5'} >
                <a className={'col-7 my-3'} href="http://localhost:3000/home/" ><img style={{maxHeight:'50px'}} src={'https://www.apfelpage.de/wp-content/uploads/2017/06/Tesla-Wordmark-Red.png'} /></a>
                <div className={'col-12 col-md-6 mb-5'} >
                    <p>USA</p>
                    <p>TESLA CORP COMPANY</p>
                    <p>TECHNOLOGIES INC</p>
                    <p>TESLA CANADA INC</p>
                </div>
                <div className={'col-12 col-md-6 mb-5'} >
                    <p>CONTACTS:</p>
                    <p>+1324996437473</p>
                    <p>tesla_corp@tesla.com</p>
                    <p>USA HEADQUARTERS</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
