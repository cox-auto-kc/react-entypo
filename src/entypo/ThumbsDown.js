import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ThumbsDown';

let EntypoThumbsDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M6.352,12.638c0.133,0.356-3.539,3.634-1.397,6.291c0.501,0.621,2.201-2.975,4.615-4.602c1.331-0.899,4.43-2.811,4.43-3.868V3.617C14,2.346,9.086,1,5.352,1C3.983,1,2,9.576,2,10.939C2,12.306,6.221,12.282,6.352,12.638z M15,12.543c0.658,0,3-0.4,3-3.123V4.572c0-2.721-2.342-3.021-3-3.021c-0.657,0,1,0.572,1,2.26v6.373C16,11.952,14.343,12.543,15,12.543z"/>
    </EntypoIcon>
);

export default EntypoThumbsDown;
