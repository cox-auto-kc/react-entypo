import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--forward';

let EntypoForward = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M12,11.874v4.357l7-6.69l-7-6.572v3.983c-8.775,0-11,9.732-11,9.732C3.484,12.296,7.237,11.874,12,11.874z"/>
    </EntypoIcon>
);

export default EntypoForward;
