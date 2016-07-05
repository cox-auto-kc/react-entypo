import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Image';

let EntypoImage = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19,2H1C0.447,2,0,2.447,0,3v14c0,0.552,0.447,1,1,1h18c0.553,0,1-0.448,1-1V3C20,2.448,19.553,2,19,2z M18,16H2V4h16V16z M14.315,10.877l-3.231,1.605L7.314,6.381L4,14h12L14.315,10.877z M13.25,9c0.69,0,1.25-0.56,1.25-1.25S13.94,6.5,13.25,6.5S12,7.06,12,7.75S12.56,9,13.25,9z"/>
    </EntypoIcon>
);

export default EntypoImage;
