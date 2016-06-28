import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--login';

let EntypoLogin = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M14,10L8,5v3H1v4h7v3L14,10z M17,17H9v2h8c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H9v2h8V17z"/>
    </EntypoIcon>
);

export default EntypoLogin;
