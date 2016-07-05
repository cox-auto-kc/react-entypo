import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Grid';

let EntypoGrid = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8,4H5C4.447,4,4,4.447,4,5v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1V5C9,4.448,8.553,4,8,4z M15,4h-3c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1V5C16,4.448,15.553,4,15,4z M8,11H5c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-3C9,11.448,8.553,11,8,11z M15,11h-3c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-3C16,11.448,15.553,11,15,11z"/>
    </EntypoIcon>
);

export default EntypoGrid;
