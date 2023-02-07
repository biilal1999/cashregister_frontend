import React, { useEffect, useState } from "react";
import CartService from "../../services/cart_service";
import CartItem from "./CartItem";
import CartTotalPrice from "./CartTotalPrice";

const CashRegistery = (props) => {
    const { products } = props;
    const [cart, setCart] = useState(null);

    const selectCartOperation = (productId, quantity) => {
        if (cart){
            const productCart = cart.products?.find((prod) => prod.product_id == productId);

            if (productCart){
                return quantity == 0 ? CartService.removeProductFromCart(cart.id, productId) :
                     CartService.updateProductQuantity(cart.id, productId, quantity);
            }

            else {
                return CartService.addProductToCart(cart.id, productId);
            }
        }

        else{
            return CartService.createCart(productId);
        }
    }

    useEffect(() => {
        CartService.getCarts()
            .then((response) => {
                if (response.data.carts.length > 0){
                    setCart(response.data.carts[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return(
        <div>
            <h1>CASH REGISTERY</h1>
            <h2>by Bilal Chekfeh</h2>
            {
                products.map((product) => {
                    const cart_prod = cart?.products?.find((cart_prod) => cart_prod.product_id == product.id);
                    const quantity = cart_prod ? cart_prod.quantity : 0;
                    return(<CartItem product={product} quantity={quantity} key={product.id} updateCart={selectCartOperation} setCart={setCart} />);
                })
            }
            <CartTotalPrice cart={cart} />
        </div>
    );
};

export default CashRegistery;