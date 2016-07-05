import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowLongRight';

let EntypoArrowLongRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M14,15.5V12H1V8h13V4.5l5.25,5.5L14,15.5z"/>
    </EntypoIcon>
);

export default EntypoArrowLongRight;
