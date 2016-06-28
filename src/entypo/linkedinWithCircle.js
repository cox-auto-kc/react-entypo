import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--linkedinWithCircle';

let EntypoLinkedinWithCircle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M7.65,13.979H5.706V7.723H7.65V13.979z M6.666,6.955c-0.614,0-1.011-0.435-1.011-0.973c0-0.549,0.409-0.971,1.036-0.971c0.627,0,1.011,0.422,1.023,0.971C7.714,6.52,7.318,6.955,6.666,6.955z M14.75,13.979h-1.944v-3.467c0-0.807-0.282-1.355-0.985-1.355c-0.537,0-0.856,0.371-0.997,0.728c-0.052,0.127-0.065,0.307-0.065,0.486v3.607H8.814v-4.26c0-0.781-0.025-1.434-0.051-1.996h1.689l0.089,0.869h0.039c0.256-0.408,0.883-1.01,1.932-1.01c1.279,0,2.238,0.857,2.238,2.699V13.979z"/>
    </EntypoIcon>
);

export default EntypoLinkedinWithCircle;
