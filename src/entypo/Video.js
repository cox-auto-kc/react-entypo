import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Video';

let EntypoVideo = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M20,5V3.799C20,3.357,19.643,3,19.201,3h-18.4C0.358,3,0,3.357,0,3.799V5h2v2H0v2h2v2H0v2h2v2H0v1.199C0,16.641,0.358,17,0.801,17h18.4C19.643,17,20,16.641,20,16.199V15h-2v-2h2v-2h-2V9h2V7h-2V5H20z M8,13V7l5,3L8,13z"/>
    </EntypoIcon>
);

export default EntypoVideo;
