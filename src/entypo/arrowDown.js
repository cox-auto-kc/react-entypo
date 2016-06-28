import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--arrowDown';

let EntypoArrowDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,17.5L3.5,11H7V3h6v8h3.5L10,17.5z"/>
    </EntypoIcon>
);

export default EntypoArrowDown;
