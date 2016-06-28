import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--moon';

let EntypoMoon = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M13.719,1.8c0.686,0.385,1.332,0.867,1.916,1.449c3.42,3.422,3.42,8.966,0,12.386c-3.42,3.42-8.965,3.42-12.386,0c-0.583-0.584-1.065-1.231-1.449-1.916c3.335,1.867,7.633,1.387,10.469-1.449C15.106,9.433,15.587,5.136,13.719,1.8z"/>
    </EntypoIcon>
);

export default EntypoMoon;
