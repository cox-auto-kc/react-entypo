import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--calendar';

let EntypoCalendar = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M17,3h-1v2h-3V3H7v2H4V3H3C1.899,3,1,3.9,1,5v12c0,1.1,0.899,2,2,2h14c1.1,0,2-0.9,2-2V5C19,3.9,18.1,3,17,3z M17,17H3V9h14V17z M6.5,1h-2v3.5h2V1z M15.5,1h-2v3.5h2V1z"/>
    </EntypoIcon>
);

export default EntypoCalendar;
