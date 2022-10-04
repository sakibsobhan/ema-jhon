import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleAddToCartClick}) => {
    const {img, name, price, seller, ratings} = product

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p className="price">Price: {price}$</p>
                <p className="manufacturer">Manufacturer : {seller}</p>
                <p className="ratings">Ratings: {ratings}</p>
            </div>
            <button className="btn-cart" onClick={()=>handleAddToCartClick(product)}>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;