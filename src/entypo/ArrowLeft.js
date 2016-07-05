import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowLeft';

let EntypoArrowLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M2.5,10L9,3.5V7h8v6H9v3.5L2.5,10z"/>
    </EntypoIcon>
);

export default EntypoArrowLeft;
