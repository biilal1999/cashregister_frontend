import axios from './axios';

class CartService{
    static getCarts = () => {
        return axios.get('/carts');
    }

    static createCart = (productId) => axios.post('/carts', {
        cart: {
            product_id: productId
        }
    });

    static addProductToCart = (cartId, productId) => axios.post(`/carts/${cartId}/products`, {
        cart_product: {
            product_id: productId
        }
    });

    static updateProductQuantity = (cartId, productId, quantity) => axios.patch(`/carts/${cartId}/products/${productId}`, {
        cart_product: {
            quantity: quantity
        }
    });

    static removeProductFromCart = (cartId, productId) => axios.delete(`/carts/${cartId}/products/${productId}`);
}

export default CartService;