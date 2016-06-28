import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--arrowLongLeft';

let EntypoArrowLongLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M0.75,10L6,4.5V8h13v4H6v3.5L0.75,10z"/>
    </EntypoIcon>
);

export default EntypoArrowLongLeft;
