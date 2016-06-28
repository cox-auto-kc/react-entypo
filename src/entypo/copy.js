import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--copy';

let EntypoCopy = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11,0H3C2.447,0,2,0.447,2,1v12c0,0.552,0.447,1,1,1h5v2h2v-2H8.001v-2H10v-2H8v2H4V2h6v4h2V1C12,0.448,11.553,0,11,0z M8,7v1h2V6H9C8.447,6,8,6.447,8,7z M12,20h2v-2h-2V20z M12,8h2V6h-2V8z M8,19c0,0.552,0.447,1,1,1h1v-2H8V19z M17,6h-1v2h2V7C18,6.448,17.553,6,17,6z M16,20h1c0.553,0,1-0.448,1-1v-1h-2V20z M16,12h2v-2h-2V12z M16,16h2v-2h-2V16z"/>
    </EntypoIcon>
);

export default EntypoCopy;
