import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Retweet';

let EntypoRetweet = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M5,13V8h2L3.5,4L0,8h2v6c0,1.104,0.895,2,2,2h9.482l-2.638-3H5z M9.156,7L6.518,4H16c1.104,0,2,0.897,2,2v6h2l-3.5,4L13,12h2V7H9.156z"/>
    </EntypoIcon>
);

export default EntypoRetweet;
