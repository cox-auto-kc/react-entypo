import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--roundBrush';

let EntypoRoundBrush = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M12.135,9.304c-2.558-1.879-6.7,1.17-7.632,5.284c-0.718,3.17-4.043,3.04-3.996,3.464c0.046,0.424,7.473,1.103,10.156-1.123C13.169,14.849,14.94,11.365,12.135,9.304z M14.338,1.508l-3.363,5.156c1.102,0.179,3.635,1.885,4.121,3.109l4.396-4.246C18.966,4.024,16.054,1.683,14.338,1.508z"/>
    </EntypoIcon>
);

export default EntypoRoundBrush;
