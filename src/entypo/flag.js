import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--flag';

let EntypoFlag = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18.926,5.584c-9.339,13.568-6.142-0.26-14.037,6.357L6.684,19H4.665L1,4.59l1.85-0.664c8.849-6.471,4.228,5.82,15.637,1.254C18.851,5.033,19.142,5.27,18.926,5.584z"/>
    </EntypoIcon>
);

export default EntypoFlag;
