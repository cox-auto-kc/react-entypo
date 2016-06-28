import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--mouse';

let EntypoMouse = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15.402,14.402l-2.627-7.535c-0.722-2.073-2.966-3.22-5.092-2.653L5.707,0.379C5.528,0.033,5.109-0.1,4.769,0.083C4.43,0.266,4.3,0.697,4.48,1.044l1.929,3.742C4.872,5.806,4.073,7.74,4.58,9.56l2.139,7.696c0.602,2.162,3.08,3.264,5.571,2.502C14.749,18.895,16.14,16.521,15.402,14.402z M8.899,8.923c-0.73,0.24-1.511-0.172-1.745-0.921C6.919,7.254,7.322,6.454,8.051,6.214c0.73-0.24,1.512,0.172,1.746,0.92S9.629,8.683,8.899,8.923z"/>
    </EntypoIcon>
);

export default EntypoMouse;
