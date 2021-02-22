import React, {createContext, useContext, useReducer} from 'react';

export const carCartContext = React.createContext();

const INIT_STATE = {
    cars: []
};

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cars: state.cars.push(action.payload)
            };
        default: return state
    }
};

const CarContext = ({children}) => {
    let [state, dispatch] = useReducer(reducer, INIT_STATE);

    const addCar = (carObj) => {
        dispatch({
            type: 'add',
            payload: carObj
        })
    };

    return (
        <carCartContext.Provider
            value={{
                addCar,
                cars: state.cars
            }}
        >
            {children}
        </carCartContext.Provider>
    );
};

export default CarContext;
