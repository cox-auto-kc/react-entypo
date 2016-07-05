import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Star';

let EntypoStar = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,1.3l2.388,6.722H18.8l-5.232,3.948l1.871,6.928L10,14.744l-5.438,4.154l1.87-6.928L1.199,8.022h6.412L10,1.3z"/>
    </EntypoIcon>
);

export default EntypoStar;
