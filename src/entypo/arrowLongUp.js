import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--arrowLongUp';

let EntypoArrowLongUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.75L15.5,6H12v13H8V6H4.5L10,0.75z"/>
    </EntypoIcon>
);

export default EntypoArrowLongUp;
