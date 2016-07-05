import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Back';

let EntypoBack = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M19,7v6c0,1.103-0.896,2-2,2H3v-3h13V8H5v2L1,6.5L5,3v2h12C18.104,5,19,5.896,19,7z"/>
    </EntypoIcon>
);

export default EntypoBack;
