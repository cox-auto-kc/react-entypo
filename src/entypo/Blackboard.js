import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Blackboard';

let EntypoBlackboard = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.539,20H6l1.406-3.698L4.44,15.298L2.539,20z M12.594,16.302L14,20h3.461l-1.901-4.702L12.594,16.302z M18,2h-6.5L11,0H9L8.5,2H2C1.447,2,1,2.447,1,3v11c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V3C19,2.448,18.553,2,18,2z"/>
    </EntypoIcon>
);

export default EntypoBlackboard;
