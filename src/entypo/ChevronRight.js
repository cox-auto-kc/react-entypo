import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ChevronRight';

let EntypoChevronRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M9.163,4.516c0.418,0.408,4.502,4.695,4.502,4.695C13.888,9.43,14,9.715,14,10s-0.112,0.57-0.335,0.787c0,0-4.084,4.289-4.502,4.695c-0.418,0.408-1.17,0.436-1.615,0c-0.446-0.434-0.481-1.041,0-1.574L11.295,10L7.548,6.092c-0.481-0.533-0.446-1.141,0-1.576C7.993,4.08,8.745,4.107,9.163,4.516z"/>
    </EntypoIcon>
);

export default EntypoChevronRight;
