import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Minus';

let EntypoMinus = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1h10.799C15.952,9,16,9.447,16,10z"/>
    </EntypoIcon>
);

export default EntypoMinus;
