import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeroContainer,
    HeroContent,
    HeroContent2

} from './HeroPackElements';

const HeroProduit = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                Nos packs
            </HeroContent>
            <HeroContent2>
                Livraison gratuite à partir de 49€
            </HeroContent2>
        </HeroContainer>
    );
};

export default HeroProduit;