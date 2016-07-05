import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Tag';

let EntypoTag = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18.662,5.521L5.237,19l0.707-4.967l-4.945,0.709L14.424,1.263c0.391-0.392,1.133-0.308,1.412,0l2.826,2.839C19.162,4.575,19.053,5.128,18.662,5.521z"/>
    </EntypoIcon>
);

export default EntypoTag;
