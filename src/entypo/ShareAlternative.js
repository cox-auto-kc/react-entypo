import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ShareAlternative';

let EntypoShareAlternative = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M9,13h2V4h2l-3-4L7,4h2V13z M17,7h-3v2h2v9H4V9h2V7H3C2.447,7,2,7.447,2,8v11c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1V8C18,7.448,17.553,7,17,7z"/>
    </EntypoIcon>
);

export default EntypoShareAlternative;
