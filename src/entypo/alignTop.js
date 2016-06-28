import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--alignTop';

let EntypoAlignTop = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,6L7,9h2v8h2V9h2L10,6z M18,4c0-0.553-0.048-1-0.6-1H2.6C2.048,3,2,3.447,2,4c0,0.553,0.048,1,0.6,1H17.4C17.952,5,18,4.553,18,4z"/>
    </EntypoIcon>
);

export default EntypoAlignTop;
