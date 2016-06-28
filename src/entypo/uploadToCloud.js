import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--uploadToCloud';

let EntypoUploadToCloud = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15.213,6.639c-0.276,0-0.546,0.025-0.809,0.068C13.748,4.562,11.716,3,9.309,3C6.37,3,3.989,5.328,3.989,8.199c0,0.256,0.02,0.508,0.057,0.756C3.905,8.938,3.763,8.928,3.617,8.928C1.619,8.928,0,10.51,0,12.463S1.619,16,3.617,16H8v-4H5.5L10,7l4.5,5H12v4h3.213C17.856,16,20,13.904,20,11.32C20,8.734,17.856,6.639,15.213,6.639z"/>
    </EntypoIcon>
);

export default EntypoUploadToCloud;
