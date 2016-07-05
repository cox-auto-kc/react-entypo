import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--LogOut';

let EntypoLogOut = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M19,10l-6-5v3H6v4h7v3L19,10z M3,3h8V1H3C1.9,1,1,1.9,1,3v14c0,1.1,0.9,2,2,2h8v-2H3V3z"/>
    </EntypoIcon>
);

export default EntypoLogOut;
