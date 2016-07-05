import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Text';

let EntypoText = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5,11h-11C4.225,11,4,11.225,4,11.5v1C4,12.776,4.225,13,4.5,13h11c0.276,0,0.5-0.224,0.5-0.5v-1C16,11.225,15.776,11,15.5,11z M15.5,7h-11C4.225,7,4,7.225,4,7.5v1C4,8.776,4.225,9,4.5,9h11C15.776,9,16,8.776,16,8.5v-1C16,7.225,15.776,7,15.5,7z M10.5,15h-6C4.225,15,4,15.225,4,15.5v1C4,16.776,4.225,17,4.5,17h6c0.276,0,0.5-0.224,0.5-0.5v-1C11,15.225,10.776,15,10.5,15z M15.5,3h-11C4.225,3,4,3.225,4,3.5v1C4,4.776,4.225,5,4.5,5h11C15.776,5,16,4.776,16,4.5v-1C16,3.225,15.776,3,15.5,3z"/>
    </EntypoIcon>
);

export default EntypoText;
