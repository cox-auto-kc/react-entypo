import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--arrowBoldRight';

let EntypoArrowBoldRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M17.5,10L10,17.5V14H3V6h7V2.5L17.5,10z"/>
    </EntypoIcon>
);

export default EntypoArrowBoldRight;
