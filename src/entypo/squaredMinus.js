import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--squaredMinus';

let EntypoSquaredMinus = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M15,11H5V9h10V11z"/>
    </EntypoIcon>
);

export default EntypoSquaredMinus;
