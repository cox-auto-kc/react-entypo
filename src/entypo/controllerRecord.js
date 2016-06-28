import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--controllerRecord';

let EntypoControllerRecord = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,3c-3.866,0-7,3.133-7,7c0,3.865,3.134,7,7,7s7-3.135,7-7C17,6.133,13.866,3,10,3z"/>
    </EntypoIcon>
);

export default EntypoControllerRecord;
