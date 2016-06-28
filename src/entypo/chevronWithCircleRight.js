import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--chevronWithCircleRight';

let EntypoChevronWithCircleRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11,10L8.698,7.494c-0.196-0.198-0.196-0.519,0-0.718c0.196-0.197,0.515-0.197,0.71,0l2.807,2.864c0.196,0.199,0.196,0.52,0,0.717l-2.807,2.864c-0.195,0.199-0.514,0.198-0.71,0c-0.196-0.197-0.196-0.518,0-0.717L11,10z M10,0.4c5.302,0,9.6,4.298,9.6,9.6c0,5.303-4.298,9.6-9.6,9.6S0.4,15.303,0.4,10C0.4,4.698,4.698,0.4,10,0.4z M10,18.354c4.613,0,8.354-3.74,8.354-8.354c0-4.614-3.741-8.354-8.354-8.354c-4.615,0-8.354,3.74-8.354,8.354C1.645,14.614,5.385,18.354,10,18.354z"/>
    </EntypoIcon>
);

export default EntypoChevronWithCircleRight;
