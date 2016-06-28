import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--alignHorizontalMiddle';

let EntypoAlignHorizontalMiddle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M8,10L5,7v2H1v2h4v2L8,10z M15,13v-2h4V9h-4V7l-3,3L15,13z M10,18c0.553,0,1-0.049,1-0.6V2.6C11,2.047,10.553,2,10,2C9.448,2,9,2.047,9,2.6V17.4C9,17.951,9.448,18,10,18z"/>
    </EntypoIcon>
);

export default EntypoAlignHorizontalMiddle;
