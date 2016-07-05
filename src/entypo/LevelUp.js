import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--LevelUp';

let EntypoLevelUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M19,9v7h-3v-6H6v3L1,8.5L6,4v3h11C18.104,7,19,7.897,19,9z"/>
    </EntypoIcon>
);

export default EntypoLevelUp;
