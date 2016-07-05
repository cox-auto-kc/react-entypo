import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--TriangleUp';

let EntypoTriangleUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15,14H5l5-9L15,14z"/>
    </EntypoIcon>
);

export default EntypoTriangleUp;
