import React from 'react';
import './ImageStack.css';
import TH01 from '../images/TH01.jpg';
import TH02 from '../images/TH02.jpg';
import TH03 from '../images/TH03.jpg';

const ImageStack = () => {
    return (
        <figure className="image-stack">
            <img src={TH01} alt="TH01" />
            <img src={TH02} alt="TH02" />
            <img src={TH03} alt="TH03" />
        </figure>
    );
};

export default ImageStack;