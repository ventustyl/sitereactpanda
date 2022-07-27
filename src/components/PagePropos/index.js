import React, { useState } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import ProposText from '../ProposText';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer'
function PagePropos() {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <GlobalStyle />
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
            <ProposText />
    <Footer />
        </div>
    )
}
    export default PagePropos;




