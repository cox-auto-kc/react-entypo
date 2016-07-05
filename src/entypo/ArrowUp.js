import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowUp';

let EntypoArrowUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,2.5L16.5,9H13v8H7V9H3.5L10,2.5z"/>
    </EntypoIcon>
);

export default EntypoArrowUp;
