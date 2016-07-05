import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ChevronWithCircleLeft';

let EntypoChevronWithCircleLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11.302,6.776c-0.196-0.197-0.515-0.197-0.71,0L7.785,9.641c-0.196,0.199-0.196,0.52,0,0.717l2.807,2.864c0.195,0.199,0.514,0.198,0.71,0c0.196-0.197,0.196-0.518,0-0.717L9,10l2.302-2.506C11.498,7.296,11.498,6.976,11.302,6.776z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6c0,5.303,4.298,9.6,9.6,9.6s9.6-4.297,9.6-9.6C19.6,4.698,15.302,0.4,10,0.4z M10,18.354c-4.615,0-8.354-3.74-8.354-8.354c0-4.614,3.739-8.354,8.354-8.354c4.613,0,8.354,3.74,8.354,8.354C18.354,14.614,14.613,18.354,10,18.354z"/>
    </EntypoIcon>
);

export default EntypoChevronWithCircleLeft;
