import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--shield';

let EntypoShield = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M17.604,3.332C12.99,4,12.075,2.833,10,1C7.925,2.833,7.01,4,2.396,3.332C-0.063,15.58,10,19,10,19S20.063,15.58,17.604,3.332z M12.473,13.309L10,12.009l-2.472,1.3L8,10.556L6,8.606l2.764-0.401L10,5.7l1.236,2.505L14,8.606l-2,1.949L12.473,13.309z"/>
    </EntypoIcon>
);

export default EntypoShield;
