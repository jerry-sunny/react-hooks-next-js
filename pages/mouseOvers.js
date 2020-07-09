import React from 'react';
import ImageToggler from '../components/imageToggleOnMouseOver';
const MouseOvers = () => {
    return (<div>
        <ImageToggler primaryImg="./speakers/bw/Speaker-187.jpg"
            secondaryImg="./speakers/Speaker-187.jpg"></ImageToggler>
        <br></br>
        <ImageToggler primaryImg="./speakers/bw/Speaker-1124.jpg"
            secondaryImg="./speakers/Speaker-1124.jpg"></ImageToggler>
    </div>)
}
export default MouseOvers;