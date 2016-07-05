import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Swap';

let EntypoSwap = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M14,5H4V3L0,6.5L4,10V8h10V5z M20,13.5L16,10v2H6v3h10v2L20,13.5z"/>
    </EntypoIcon>
);

export default EntypoSwap;
