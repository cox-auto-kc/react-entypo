import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--bookmark';

let EntypoBookmark = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M14,2v17l-4-4l-4,4V2c0-0.553,0.585-1.02,1-1h6C13.689,0.98,14,1.447,14,2z"/>
    </EntypoIcon>
);

export default EntypoBookmark;
