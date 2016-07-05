import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Circle';

let EntypoCircle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.4C4.698,0.4,0.4,4.698,0.4,10C0.4,15.302,4.698,19.6,10,19.6c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M10,17.599c-4.197,0-7.6-3.402-7.6-7.6S5.802,2.4,10,2.4c4.197,0,7.601,3.402,7.601,7.6S14.197,17.599,10,17.599z"/>
    </EntypoIcon>
);

export default EntypoCircle;
