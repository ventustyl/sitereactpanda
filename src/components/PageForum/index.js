import React, { useState } from 'react';
import { GlobalStyle } from '../../GlobalStyle';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer'

import ForumArticle from '../ForumArticle';
import ForumMessenger from '../ForumMessenger'
function PageForum() {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <GlobalStyle />
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
          <ForumArticle />
          <ForumMessenger />
    <Footer />
        </div>
    )
}
    export default PageForum;




