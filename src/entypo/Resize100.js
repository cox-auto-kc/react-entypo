import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Resize100';

let EntypoResize100 = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M4.1,14.1L1,17l2,2l2.9-3.1L8,18v-6H2L4.1,14.1z M19,3l-2-2l-2.9,3.1L12,2v6h6l-2.1-2.1L19,3z"/>
    </EntypoIcon>
);

export default EntypoResize100;
