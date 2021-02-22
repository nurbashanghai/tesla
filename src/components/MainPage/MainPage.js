import React from 'react';
import CarMainPage from "../CarPage/CarMainPage";

const MainPage = () => {
    return (
<<<<<<< HEAD
        <>
            <div>
                <img style={{maxWidth:'100%',maxHeight:'100%'}} src="https://www.tesla.com/sites/default/files/solarpanels/hero/D_solarpanels_hero_2880x1800_ENC.jpg" />
                
            </div>
            <div>
                <img style={{ maxWidth: '100%' }} src="https://www.tesla.com/sites/default/files/solarroof/v3/value/solar-roof_value_D.jpg" />
                
            </div>
            <div>
                <h1>Accessories</h1>
                <img style={{maxHeight:'400px'}}src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_1.jpg"></img>
            </div>
                <button style={{
                                height:'40px',
                                width:'200px',
                                backgroundColor:'black',
                                borderRadius:'20px',
                                color:'white' ,
                                alignItems:'center'
                }}>Shop now</button>
        </>
=======
        <div>Main Page
            <CarMainPage/>
            <div data-aos="zoom-in" >
                <img style={{maxWidth:'100%',maxHeight:'100%'}} src="https://www.tesla.com/sites/default/files/solarpanels/hero/D_solarpanels_hero_2880x1800_ENC.jpg" />

            </div>
            <div data-aos="zoom-in" >
                <img style={{ maxWidth: '100%' }} src="https://www.tesla.com/sites/default/files/solarroof/v3/value/solar-roof_value_D.jpg" />

            </div>
            <div data-aos="zoom-in" >
                <h1>Accessories</h1>
                <img style={{maxHeight:'400px'}} className={'img-fluid'} src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_1.jpg"/>
            </div>
            <button style={{
                height:'40px',
                width:'200px',
                backgroundColor:'black',
                borderRadius:'20px',
                color:'white' ,
                alignItems:'center'
            }}>Shop now</button>

        </div>
>>>>>>> 69fd72823fe090b64fdb94198f9a948a7ac9b802
    )
};

export default MainPage;
