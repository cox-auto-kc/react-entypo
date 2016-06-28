import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--levelDown';

let EntypoLevelDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"/>
    </EntypoIcon>
);

export default EntypoLevelDown;
