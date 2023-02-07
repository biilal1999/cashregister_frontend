import axios from './axios';

class ProductsService {
    static getProducts = () => {
        return axios.get('/products');
    }
}

export default ProductsService;