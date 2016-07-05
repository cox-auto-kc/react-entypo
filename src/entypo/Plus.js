import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Plus';

let EntypoPlus = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399C15.952,9,16,9.447,16,10z"/>
    </EntypoIcon>
);

export default EntypoPlus;
