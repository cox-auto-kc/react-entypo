import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--clipboard';

let EntypoClipboard = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15.6,2l-1.2,3H5.6l-1.2-3C3.629,2,3,2.629,3,3.4V18.6c0,0.77,0.629,1.4,1.399,1.4h11.2c0.77,0,1.4-0.631,1.4-1.4V3.4C17,2.629,16.369,2,15.6,2z M13.6,4l0.9-2h-2.181L11.6,0h-3.2L7.68,2H5.5l0.899,2H13.6z"/>
    </EntypoIcon>
);

export default EntypoClipboard;
