import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const startingState = {
    products: [
        { id: 1, name: 'Gray', price:220, img: require('../components/img/3.jpg') },
        { id: 2, name: 'Black Seude', price:199, img: require('../components/img/1.jpg') },
        { id: 3, name: 'White', price:666, img: require('../components/img/5.jpg') },
        { id: 4, name: 'Desert', price:323, img: require('../components/img/7.jpg') },
        { id: 5, name: 'Desert Flats', price:990, img: require('../components/img/2.jpg') },
        { id: 6, name: 'White Mule', price:111, img: require('../components/img/4.jpg') },
        { id: 7, name: 'Brown Mule', price:323, img: require('../components/img/6.jpg') },
        { id: 8, name: 'Chelsea Boots', price:323, img: require('../components/img/8.jpg') },
    ],
    cart: [
      
    ]
}

export const GlobalContext = createContext(startingState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, startingState);

    function addToCart(product) {      
      dispatch({
        type: 'addToCart',
        payload: product
      })
    }

    function removeFromCart(id) {
      dispatch({
        type: 'remove',
        payload: id
      })
    }

    function increase(id) {
      console.log("WOW")
      dispatch({
        type: 'increase',
        payload: id
      })
    }

    function decrease(id) {
      dispatch({
        type: 'decrease',
        payload: id
      })
    }

    return (<GlobalContext.Provider value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeFromCart,
        increase,
        decrease
      }}>
        {children}
      </GlobalContext.Provider>);

}