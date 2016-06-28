import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--signal';

let EntypoSignal = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,14c-1.094,0-1.981,0.894-1.981,2c0,1.104,0.887,2,1.981,2c1.094,0,1.98-0.896,1.98-2C11.98,14.895,11.094,14,10,14z M5.8,11.758l1.4,1.414c1.546-1.562,4.054-1.562,5.601,0l1.399-1.414C11.881,9.415,8.119,9.415,5.8,11.758z M3,8.928l1.4,1.414c3.092-3.123,8.106-3.123,11.199,0L17,8.928C13.135,5.024,6.865,5.024,3,8.928z M0.199,6.1l1.4,1.414c4.639-4.686,12.161-4.686,16.801,0L19.8,6.1C14.388,0.633,5.612,0.633,0.199,6.1z"/>
    </EntypoIcon>
);

export default EntypoSignal;
