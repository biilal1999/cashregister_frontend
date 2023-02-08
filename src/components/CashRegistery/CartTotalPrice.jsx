import React from "react";

const CartTotalPrice = (props) => {
    const { cart } = props;

    return ( <div><p>Total Price: { cart ? cart.total_price : 0 }€</p></div> );
};

export default CartTotalPrice;