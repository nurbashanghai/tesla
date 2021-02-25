import React from 'react';
import CarMainPage from "../CarPage/CarMainPage";
import Header from "../Header/Header";
// import CarMainPageTest from "../CarPage/CarMainPageTest";

const MainPage = () => {
    return (
        <div style={{backgroundColor: 'WhiteSmoke'}} >
            <Header/>
            {/*<CarMainPageTest/>*/}
            <CarMainPage/>
            <div style={{position: 'relative'}} >
                <img style={{maxWidth:'100%',maxHeight:'100%'}} src="https://www.tesla.com/sites/default/files/solarpanels/hero/D_solarpanels_hero_2880x1800_ENC.jpg" />
                <h2 className={'position-absolute'} style={{top: '40px', left: 0, right: 0}}  >Low Cost Solar Panels</h2>
            </div>
            <div style={{position: 'relative'}} >
                <img style={{ maxWidth: '100%' }} src="https://www.tesla.com/sites/default/files/solarroof/v3/value/solar-roof_value_D.jpg" />
                <h2 className={'position-absolute'} style={{top: '40px', left: 0, right: 0}}  >Low Cost Solar Panels</h2>
            </div>
            <div style={{position: 'relative'}} >
                <h2 className={'position-absolute'} style={{top: '40px', left: 0, right: 0}} >Accessories</h2>
                <img style={{maxHeight:'400px'}} className={'img-fluid'} src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_1.jpg"/>
            </div>
            <button style={{
                    height:'40px',
                    width:'200px',
                    backgroundColor:'black',
                    borderRadius:'20px',
                    color:'white' ,
                    alignItems:'center',
            }}>Shop now</button>
        </div>
    )
};

export default MainPage;
