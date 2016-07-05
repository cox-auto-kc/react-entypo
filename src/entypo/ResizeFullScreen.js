import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ResizeFullScreen';

let EntypoResizeFullScreen = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M6.987,10.987l-2.931,3.031L2,11.589V18h6.387l-2.43-2.081l3.03-2.932L6.987,10.987z M11.613,2l2.43,2.081l-3.03,2.932l2,2l2.931-3.031L18,8.411V2H11.613z"/>
    </EntypoIcon>
);

export default EntypoResizeFullScreen;
