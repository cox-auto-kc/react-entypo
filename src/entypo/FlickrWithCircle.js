import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--FlickrWithCircle';

let EntypoFlickrWithCircle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M7.436,12c-1.096,0-1.982-0.895-1.982-2c0-1.105,0.887-2,1.982-2c1.094,0,1.982,0.895,1.982,2C9.418,11.105,8.529,12,7.436,12z M12.565,12c-1.095,0-1.983-0.895-1.983-2c0-1.105,0.888-2,1.983-2c1.096,0,1.982,0.895,1.982,2C14.547,11.105,13.66,12,12.565,12z"/>
    </EntypoIcon>
);

export default EntypoFlickrWithCircle;
