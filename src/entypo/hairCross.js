import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--hairCross';

let EntypoHairCross = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.4c-5.303,0-9.601,4.298-9.601,9.6c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M11,17.525V13H9v4.525C5.604,17.079,2.92,14.396,2.473,11H7V9H2.473C2.92,5.604,5.604,2.921,9,2.475V7h2V2.475c3.394,0.447,6.078,3.13,6.525,6.525H13v2h4.525C17.078,14.394,14.394,17.078,11,17.525z"/>
    </EntypoIcon>
);

export default EntypoHairCross;
