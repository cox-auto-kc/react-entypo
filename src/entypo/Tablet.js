import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Tablet';

let EntypoTablet = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16,0H4C2.9,0,2,0.899,2,2v16c0,1.1,0.9,2,2,2h12c1.101,0,2-0.9,2-2V2C18,0.899,17.101,0,16,0z M10,19c-0.69,0-1.25-0.447-1.25-1s0.56-1,1.25-1c0.689,0,1.25,0.447,1.25,1S10.689,19,10,19z M16,16H4V2h12V16z"/>
    </EntypoIcon>
);

export default EntypoTablet;
