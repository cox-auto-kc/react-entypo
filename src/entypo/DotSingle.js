import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--DotSingle';

let EntypoDotSingle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M7.8,10c0,1.215,0.986,2.2,2.201,2.2S12.2,11.214,12.2,10c0-1.215-0.984-2.199-2.199-2.199S7.8,8.785,7.8,10z"/>
    </EntypoIcon>
);

export default EntypoDotSingle;
