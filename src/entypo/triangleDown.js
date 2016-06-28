import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--triangleDown';

let EntypoTriangleDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M5,6h10l-5,9L5,6z"/>
    </EntypoIcon>
);

export default EntypoTriangleDown;
