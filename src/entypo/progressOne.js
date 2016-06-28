import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--progressOne';

let EntypoProgressOne = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18,5H2C0.9,5,0,5.9,0,7v6c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C20,5.9,19.1,5,18,5z M18,13H2V7h16V13z M7,8H3v4h4V8z"/>
    </EntypoIcon>
);

export default EntypoProgressOne;
