import React, {useState} from 'react';
import './ImageStack.scss';
import {TH01, TH02, TH03, TH04, TH05} from '../images';

const ImageStack = () => {
    const [images, setImages] = useState([TH01, TH02, TH03, TH04, TH05])
    
    const handleOnClick = (image) => {
        const newImages = images.filter(images => images !== image);
        newImages.unshift(image);
        setImages(newImages);
    }

    return (
        <figure className="image-stack">
            {images.map((image) => {
                const regex = /TH\d+/;
                const arr = regex.exec(image);
                return <img key={image} className={arr[0]} src={image} alt="TH02" onClick={() => handleOnClick(image)} />
            })}
        </figure>
    );
};

export default ImageStack;