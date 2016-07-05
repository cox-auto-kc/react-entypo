import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Bookmarks';

let EntypoBookmarks = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15,0h-4c-0.553,0-1,0.447-1,1l0.023,0.222c1.102,0,2,0.897,2,2v11.359L13,13.4l3,3.6V1C16,0.447,15.553,0,15,0z M9.023,3H5C4.447,3,4,3.447,4,4v16l3-3.6l3,3.6V4C10,3.447,9.576,3,9.023,3z"/>
    </EntypoIcon>
);

export default EntypoBookmarks;
