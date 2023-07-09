import React from 'react'
import { FaTrash } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';

const CartItem = ( {id, name, image, color, price, amount } ) => {
    const setDecrease = () =>
    {
        //amount > 1 ? setAmount(amount-1) : setAmount(1);
    }
    const setIncrease = () =>
    {
        //amount < stock ? setAmount(amount+1) : setAmount(stock);
    }
  return (
    <div className='cart-heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt={id} />
            </figure>
        </div>
        <div>
            <p>{name}</p>
            <div className="color-div">
                <p> color: </p>
                <div className="color-style" style={{background:color}} >  </div>
            </div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p> ₹{price} </p>
      </div>
      
      {/* quantity */}
      <CartAmountToggle
            amount={amount}
            setDecrease = {setDecrease}
            setIncrease = {setIncrease}
      />

      {/* subtotal */}
      <div className="cart-hide">
        <p> ₹{price*amount} </p>
      </div>

      <div>
        <FaTrash className='remove_icon' />
      </div>

    </div>
  )
}

export default CartItem;
