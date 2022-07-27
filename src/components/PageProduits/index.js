import React from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import HeroProduit from '../HeroProduit';
import Products from '../Products';
import { productData } from '../Products/data';
import Footer from '../Footer'

function PageProduits() {
    return (
        <div>
            <GlobalStyle />
            <HeroProduit />
            <Products  data={productData} />
            <Footer />
    
        </div>
    )
}
    export default PageProduits;