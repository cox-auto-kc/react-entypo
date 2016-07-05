import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Note';

let EntypoNote = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M14.971,9.438c-0.422,0.656-0.646,0.375-0.52,0C14.787,8.445,14.799,4.91,12,4.469L11.998,16c0,1.657-1.735,4-4.998,4c-1.657,0-3-0.871-3-2.5c0-2.119,1.927-3.4,4-3.4c1.328,0,2,0.4,2,0.4V0h2C12,2.676,17.986,4.744,14.971,9.438z"/>
    </EntypoIcon>
);

export default EntypoNote;
