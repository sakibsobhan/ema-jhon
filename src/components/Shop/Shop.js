import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCartClick = (product) =>{
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product=> <Product 
                        key ={product.id} 
                        product ={product}
                        handleAddToCartClick={handleAddToCartClick}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;