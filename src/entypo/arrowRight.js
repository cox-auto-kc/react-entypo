import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--arrowRight';

let EntypoArrowRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11,16.5V13H3V7h8V3.5l6.5,6.5L11,16.5z"/>
    </EntypoIcon>
);

export default EntypoArrowRight;
