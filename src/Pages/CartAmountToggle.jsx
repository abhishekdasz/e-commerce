import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const CartAmountToggle = ( { amount, setDecrease, setIncrease } ) => {
  return (
    <Wrapper>
    <div className="card-button">
        <div className="amount-toggle">
            <button onClick={ () => setDecrease() }> <FaMinus/> </button>
            <div className="amount-style"> {amount} </div>
            <button onClick={ () => setIncrease() }> <FaPlus/> </button>
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .amount-toggle {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      font-size: 1rem;
    }
    .amount-style 
    {
        font-size: 1.5rem;
        color: #7979da;
        margin: 0 2rem;
    }
  }
`

export default CartAmountToggle;