import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--HeartOutlined';

let EntypoHeartOutlined = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M17.19,4.156c-1.672-1.535-4.383-1.535-6.055,0L10,5.197L8.864,4.156c-1.672-1.535-4.382-1.535-6.054,0c-1.881,1.726-1.881,4.519,0,6.245L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.156z M16.124,9.375L10,15.09L3.875,9.375C3.258,8.808,3.019,8.068,3.019,7.281s0.138-1.433,0.756-1.999C4.32,4.781,5.053,4.505,5.838,4.505c0.784,0,1.517,0.476,2.062,0.978L10,7.308l2.099-1.826c0.546-0.502,1.278-0.978,2.063-0.978s1.518,0.276,2.063,0.777c0.618,0.566,0.755,1.212,0.755,1.999S16.742,8.808,16.124,9.375z"/>
    </EntypoIcon>
);

export default EntypoHeartOutlined;
