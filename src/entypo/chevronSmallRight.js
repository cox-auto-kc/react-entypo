import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--chevronSmallRight';

let EntypoChevronSmallRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M11,10L7.859,6.58c-0.268-0.27-0.268-0.707,0-0.978c0.268-0.27,0.701-0.27,0.969,0l3.83,3.908c0.268,0.271,0.268,0.709,0,0.979l-3.83,3.908c-0.267,0.272-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.978L11,10z"/>
    </EntypoIcon>
);

export default EntypoChevronSmallRight;
