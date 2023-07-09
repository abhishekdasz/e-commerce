import { useContext, createContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const CartProvider = ( {children} ) => {
  const initialState = {
    cart: [],
    total_items: "",
    total_amount: "",
    shipping_fee: 50,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({type:"ADD_TO_CART", payload:{id, color, amount, product} })
  };
  useEffect(()=>{
    dispatch({type:"CART_TOTAL_PRICE"})
  })
  return(
    <CartContext.Provider value={{...state, addToCart}}> 
      {children} 
    </CartContext.Provider>
  );
};

const useCartContext = () => 
{
  return useContext(CartContext); 
}

export { CartProvider, useCartContext };