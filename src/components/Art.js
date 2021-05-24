import React from 'react'
import './Home.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

export const Art = ({ imageB }) => {
    return (
        <div id={imageB} className="section">
            <div className="title-group">
                <h1 className="artH1">Sorrowful experiences unleash<br /> the artist in each one of us</h1>
                <h1 className="artH1"></h1>
            </div>
        </div>
        
    )
}
