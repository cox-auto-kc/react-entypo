import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowBoldLeft';

let EntypoArrowBoldLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,2.5V6h7v8h-7v3.5L2.5,10L10,2.5z"/>
    </EntypoIcon>
);

export default EntypoArrowBoldLeft;
