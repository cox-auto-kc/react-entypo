import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Clapperboard';

let EntypoClapperboard = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M20,3v14c0,0.552-0.447,1-1,1H1c-0.553,0-1-0.448-1-1V3c0-0.553,0.447-1,1-1h1l3,3h2.5l-3-3h3l3,3H13l-3-3h3l3,3h2.5l-3-3H19C19.553,2,20,2.448,20,3z"/>
    </EntypoIcon>
);

export default EntypoClapperboard;
