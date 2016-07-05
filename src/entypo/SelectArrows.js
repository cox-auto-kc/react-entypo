import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--SelectArrows';

let EntypoSelectArrows = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,1L5,8h10L10,1z M10,19l5-7H5L10,19z"/>
    </EntypoIcon>
);

export default EntypoSelectArrows;
