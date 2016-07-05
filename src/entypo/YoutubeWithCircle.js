import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--YoutubeWithCircle';

let EntypoYoutubeWithCircle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11.603,9.833L9.357,8.785C9.161,8.694,9,8.796,9,9.013v1.974c0,0.217,0.161,0.319,0.357,0.228l2.245-1.048C11.799,10.075,11.799,9.925,11.603,9.833z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M10,13.9c-4.914,0-5-0.443-5-3.9s0.086-3.9,5-3.9s5,0.443,5,3.9S14.914,13.9,10,13.9z"/>
    </EntypoIcon>
);

export default EntypoYoutubeWithCircle;
