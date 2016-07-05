import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowBoldDown';

let EntypoArrowBoldDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M2.5,10H6V3h8v7h3.5L10,17.5L2.5,10z"/>
    </EntypoIcon>
);

export default EntypoArrowBoldDown;
