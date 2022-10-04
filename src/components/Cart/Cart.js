import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3>Order Summary</h3>

            <ul>
                <li>Selected Items: {cart.length}</li>
                <li>Total Price: $1140</li>
                <li>Total Shipping Charge: $5</li>
                <li>Tax: $114</li>
                <li>Grand Total: $1559</li>
            </ul>
            <button className="clear-cart">Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            <button className="review-order">Review Order <FontAwesomeIcon icon={faChevronRight} /></button>

        </div>
    );
};

export default Cart;