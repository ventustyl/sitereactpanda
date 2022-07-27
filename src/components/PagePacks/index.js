import React from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import HeroPack from '../HeroPack';
import Packs from '../Packs';
import { productData } from '../Packs/data';
import Footer from '../Footer'

function PagePacks() {
    return (
        <div>
            <GlobalStyle />
            <HeroPack />
            <Packs data={productData} />
            <Footer />
        </div>
    )
}
    export default PagePacks;