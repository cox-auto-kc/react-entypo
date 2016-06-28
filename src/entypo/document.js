import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--document';

let EntypoDocument = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z M15,17H5V3h10V17z"/>
    </EntypoIcon>
);

export default EntypoDocument;
