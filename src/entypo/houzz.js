import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--houzz';

let EntypoHouzz = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M4,10l6,3l-6,3V10z M10,7l6,3V4L10,7z M10,20l6-3v-7l-6,3V20z M10,0L4,3v7l6-3V0z"/>
    </EntypoIcon>
);

export default EntypoHouzz;
