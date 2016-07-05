import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ChevronThinRight';

let EntypoChevronThinRight = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
    </EntypoIcon>
);

export default EntypoChevronThinRight;
