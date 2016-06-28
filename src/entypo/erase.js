import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--erase';

let EntypoErase = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18,3H8.446c-0.44,0-1.071,0.236-1.402,0.525L0.248,9.473c-0.331,0.289-0.331,0.764,0,1.053l6.796,5.947C7.375,16.762,8.006,17,8.446,17H18c1.1,0,2-0.9,2-2V5C20,3.9,19.1,3,18,3z M15.191,14l-2.557-2.557L10.078,14l-1.443-1.443L11.191,10L8.635,7.443L10.078,6l2.557,2.555L15.19,6l1.444,1.443L14.078,10l2.557,2.555L15.191,14z"/>
    </EntypoIcon>
);

export default EntypoErase;
