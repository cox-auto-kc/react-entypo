import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--circleWithMinus';

let EntypoCircleWithMinus = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4c0,4.639,3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4C18.4,5.361,14.639,1.6,10,1.6z M15,11H5V9h10V11z"/>
    </EntypoIcon>
);

export default EntypoCircleWithMinus;
