import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--folder';

let EntypoFolder = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18.405,4.799C18.294,4.359,17.75,4,17.195,4h-6.814C9.827,4,9.051,3.682,8.659,3.293L8.063,2.705C7.671,2.316,6.896,2,6.342,2H3.087C2.532,2,2.028,2.447,1.967,2.994L1.675,6h16.931L18.405,4.799z M19.412,7H0.588c-0.342,0-0.61,0.294-0.577,0.635l0.923,9.669C0.971,17.698,1.303,18,1.7,18H18.3c0.397,0,0.728-0.302,0.766-0.696l0.923-9.669C20.022,7.294,19.754,7,19.412,7z"/>
    </EntypoIcon>
);

export default EntypoFolder;
