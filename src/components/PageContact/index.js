import React, { useState } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer'
import FormContact from '../FormContact';

function PageContact() {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <GlobalStyle />
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
          <FormContact />
    <Footer />
        </div>
    )
}
    export default PageContact;
