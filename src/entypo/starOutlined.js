import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--starOutlined';

let EntypoStarOutlined = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18.8,8.022h-6.413L10,1.3L7.611,8.022H1.199l5.232,3.947L4.56,18.898L10,14.744l5.438,4.154l-1.869-6.929L18.8,8.022z M10,12.783l-3.014,2.5l1.243-3.562l-2.851-2.3L8.9,9.522l1.1-4.04l1.099,4.04l3.521-0.101l-2.851,2.3l1.243,3.562L10,12.783z"/>
    </EntypoIcon>
);

export default EntypoStarOutlined;
