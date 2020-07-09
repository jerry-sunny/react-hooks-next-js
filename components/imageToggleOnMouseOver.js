import React, { useRef } from 'react';

const ImageToggler = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);

    return (<div>
        <img src={primaryImg} ref={imageRef}
            onMouseOver={() => { imageRef.current.src = secondaryImg }}
            onMouseOut={() => { imageRef.current.src = primaryImg }}></img>
    </div>)
}

export default ImageToggler;