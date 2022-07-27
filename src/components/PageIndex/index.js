import React from 'react';

import { GlobalStyle } from '../../GlobalStyle';
import Hero from '../Hero';
import Footer from '../Footer'
import Feature from '../Feature';



function PageIndex() {
    return (
        <div>
            <GlobalStyle />
            <Hero />
            <Feature />
        <Footer />
        </div>
    )
}
    export default PageIndex;