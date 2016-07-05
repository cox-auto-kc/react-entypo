import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--OldMobile';

let EntypoOldMobile = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M13.6,3H7V0H5v18.6C5,19.37,5.629,20,6.398,20H13.6c0.769,0,1.4-0.631,1.4-1.4V4.401C15,3.629,14.369,3,13.6,3z M8,15c-0.691,0-1.25-0.447-1.25-1S7.309,13,8,13s1.25,0.447,1.25,1S8.691,15,8,15z M9.25,17c0,0.553-0.559,1-1.25,1s-1.25-0.447-1.25-1S7.309,16,8,16S9.25,16.447,9.25,17z M7,11V5h6v6H7z M12,15c-0.691,0-1.25-0.447-1.25-1s0.559-1,1.25-1s1.25,0.447,1.25,1S12.691,15,12,15z M13.25,17c0,0.553-0.559,1-1.25,1s-1.25-0.447-1.25-1s0.559-1,1.25-1S13.25,16.447,13.25,17z"/>
    </EntypoIcon>
);

export default EntypoOldMobile;
