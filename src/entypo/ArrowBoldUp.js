import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ArrowBoldUp';

let EntypoArrowBoldUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,2.5l7.5,7.5H14v7H6v-7H2.5L10,2.5z"/>
    </EntypoIcon>
);

export default EntypoArrowBoldUp;
