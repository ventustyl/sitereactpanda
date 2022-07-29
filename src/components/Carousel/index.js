import React from 'react';
import { CarouselContainer} from './CarouselElements';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../images/carousel1.jpg'
import Image2 from '../../images/carousel2.jpg'



export default function CarouselI() {
    return (
        <CarouselContainer>
        <Carousel>
        <div>
            <img src={Image1} width= "80%" alt="Background1" />
        </div>
        <div>
            <img src={Image2}  width= "80%" alt="Background2"/>
        </div>
    </Carousel>
    </CarouselContainer>
);
}
