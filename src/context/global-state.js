import React, { useReducer } from 'react'
import ShopContext from './shop-context';
import { ShopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers'

const GlobalState = props => {

  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ]

  const [cartState, dispatch] = useReducer(ShopReducer, { cart: [] } )

  const addProductToCard = product => {
    
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product })
    }, 500)
  }

  const removeProductFromCard = productId => {
    
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId })
    }, 500)
  }

  return (
    <ShopContext.Provider value={{
      products: products,
      cart: cartState.cart,
      addProduct: addProductToCard,
      removeProduct: removeProductFromCard
    }}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default GlobalState