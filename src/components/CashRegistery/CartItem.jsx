import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faMinus
} from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {
    const { product, quantity, updateCart, setCart } = props;

    const handleCart = (productId, quantity) => {
        updateCart(productId, quantity)
            .then((response) => {
                const productCarts = response.data.cart.products;
                productCarts.length > 0 ? setCart(response.data.cart) : setCart(null);
            })
            .catch((error) =>{
                console.log(error);
            })
    };

    return(
        <>
            <div style={{margin: '7% 0'}}>
                <span>{product.name}</span>
                <span>  --------</span>
                <span>
                    <button onClick={() => handleCart(product.id, quantity - 1)} disabled={quantity == 0} 
                            style={{cursor: 'pointer', margin: '0 2%'}}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </span>    
                <span>{quantity}</span>
                <span>
                    <button onClick={() => handleCart(product.id, quantity + 1)} style={{cursor: 'pointer', margin: '0 2%'}}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </span>
                <span>--------  </span>
                <span>Price: {product.price}€</span>                 
            </div>
        </>
    );
};

export default CartItem;