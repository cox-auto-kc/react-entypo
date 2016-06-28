import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--alignVerticalMiddle';

let EntypoAlignVerticalMiddle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,12l-3,3h2v4h2v-4h2L10,12z M13,5h-2V1H9v4H7l3,3L13,5z M18,10c0-0.553-0.048-1-0.6-1H2.6C2.048,9,2,9.447,2,10c0,0.551,0.048,1,0.6,1H17.4C17.952,11,18,10.551,18,10z"/>
    </EntypoIcon>
);

export default EntypoAlignVerticalMiddle;
