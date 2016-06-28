import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--chevronUp';

let EntypoChevronUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15.484,12.452c-0.436,0.446-1.043,0.481-1.576,0L10,8.705l-3.908,3.747c-0.533,0.481-1.141,0.446-1.574,0c-0.436-0.445-0.408-1.197,0-1.615c0.406-0.418,4.695-4.502,4.695-4.502C9.43,6.112,9.715,6,10,6s0.57,0.112,0.789,0.335c0,0,4.287,4.084,4.695,4.502C15.893,11.255,15.92,12.007,15.484,12.452z"/>
    </EntypoIcon>
);

export default EntypoChevronUp;
