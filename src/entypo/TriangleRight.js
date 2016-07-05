import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--TriangleRight';

let EntypoTriangleRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15,10l-9,5V5L15,10z"/>
    </EntypoIcon>
);

export default EntypoTriangleRight;
