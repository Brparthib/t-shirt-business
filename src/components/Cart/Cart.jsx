import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item!</p>
    }else{
        message = <p>Thanks for buying</p>
    }

    return (
        <div className='cart ml-5 mt-5 bg-slate-500 text-white'>
            <h2 className='text-2xl text-center'>Order Summary</h2>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >
                    {tshirt.name}
                    <button onClick={() => {handleRemoveItem(tshirt)}}>X</button>
                    </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;