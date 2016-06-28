import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--loop';

let EntypoLoop = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M20,7v7c0,1.103-0.896,2-2,2H2c-1.104,0-2-0.897-2-2V7c0-1.104,0.896-2,2-2h7V3l4,3.5L9,10V8H3v5h14V8h-3V5h4C19.104,5,20,5.896,20,7z"/>
    </EntypoIcon>
);

export default EntypoLoop;
