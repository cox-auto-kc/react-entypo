import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--phone';

let EntypoPhone = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11.229,11.229c-1.583,1.582-3.417,3.096-4.142,2.371c-1.037-1.037-1.677-1.941-3.965-0.102c-2.287,1.838-0.53,3.064,0.475,4.068c1.16,1.16,5.484,0.062,9.758-4.211c4.273-4.274,5.368-8.598,4.207-9.758c-1.005-1.006-2.225-2.762-4.063-0.475c-1.839,2.287-0.936,2.927,0.103,3.965C14.324,7.812,12.811,9.646,11.229,11.229z"/>
    </EntypoIcon>
);

export default EntypoPhone;
