import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowLongDown';

let EntypoArrowLongDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,19.25L4.5,14H8V1h4v13h3.5L10,19.25z"/>
    </EntypoIcon>
);

export default EntypoArrowLongDown;
