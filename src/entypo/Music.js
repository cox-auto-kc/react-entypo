import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Music';

let EntypoMusic = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z M12.795,11.519c-0.185,0.382-0.373,0.402-0.291,0C12.715,10.48,12.572,8.248,11,8v4.75c0,0.973-0.448,1.82-1.639,2.203c-1.156,0.369-2.449-0.016-2.752-0.846c-0.303-0.83,0.377-1.84,1.518-2.256C8.764,11.619,9.502,11.559,10,11.75V5h1C11,7.355,15.065,6.839,12.795,11.519z"/>
    </EntypoIcon>
);

export default EntypoMusic;
