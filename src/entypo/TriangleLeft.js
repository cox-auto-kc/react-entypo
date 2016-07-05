import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--TriangleLeft';

let EntypoTriangleLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M14,5v10l-9-5L14,5z"/>
    </EntypoIcon>
);

export default EntypoTriangleLeft;
