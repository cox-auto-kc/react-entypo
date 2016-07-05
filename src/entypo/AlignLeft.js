import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--AlignLeft';

let EntypoAlignLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M6,10l3,3v-2h8V9H9V7L6,10z M4,2C3.447,2,3,2.047,3,2.6V17.4C3,17.951,3.447,18,4,18c0.552,0,1-0.049,1-0.6V2.6C5,2.047,4.552,2,4,2z"/>
    </EntypoIcon>
);

export default EntypoAlignLeft;
