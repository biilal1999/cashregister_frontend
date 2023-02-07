import React, { useEffect, useState } from 'react';
import ProductsService from '../services/products_service';
import CashRegistery from './CashRegistery/CashRegistery';

const AppContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (products && products.length <= 0){
            ProductsService.getProducts()
                .then((response) => {
                    setProducts(response.data.products || []);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    });

    return(
        <div style={{textAlign: 'center'}}>{ products && products.length > 0 && <CashRegistery products={products} /> }</div>
    );
};

export default AppContainer;