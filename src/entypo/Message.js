import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Message';

let EntypoMessage = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18,6v7c0,1.1-0.9,2-2,2h-4v3l-4-3H4c-1.101,0-2-0.9-2-2V6c0-1.1,0.899-2,2-2h12C17.1,4,18,4.9,18,6z"/>
    </EntypoIcon>
);

export default EntypoMessage;
