import React from 'react'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../Context/cart_Context';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ( {product} ) => {
    const {addToCart} = useCartContext();
    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);
    const setDecrease = () =>
    {
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    }
    const setIncrease = () =>
    {
        amount < stock ? setAmount(amount+1) : setAmount(stock);
    }
  return (
    <Wrapper>
        <div className="colors">
            <p>
                Colors:
                { colors.map((currColor, index)=>{
                    return (
                    <button 
                        key={index} 
                        style={{background:currColor}} 
                        className={color === currColor ? "btnStyle active" : "btnStyle"}
                        onClick={()=> setColor(currColor)}
                    >
                        { color === currColor ? <FaCheck className='checkStyle'/> : null }
                    </button>)
                }) }
            </p>
        </div>

        {/* Add to cart */}
        <CartAmountToggle 
            amount={amount}
            setDecrease = {setDecrease}
            setIncrease = {setIncrease}
        />

        <NavLink to="/cart" onClick={()=> addToCart(id, color, amount, product)}> 
          <button className="btn"> Add to Cart </button> 
        </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p 
  {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .btn
    {
        text-decoration: none;
        max-width: auto;
        background-color: rgb(98 84 243);
        color: rgb(255 255 255);
        padding: 0.6rem 0.5rem;
        border: none;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
    }
`

export default AddToCart