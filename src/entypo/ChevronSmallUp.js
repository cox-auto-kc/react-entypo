import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ChevronSmallUp';

let EntypoChevronSmallUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M6.582,12.141c-0.271,0.268-0.709,0.268-0.978,0c-0.269-0.268-0.272-0.701,0-0.969l3.908-3.83c0.27-0.268,0.707-0.268,0.979,0l3.908,3.83c0.27,0.267,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.979,0L10,9L6.582,12.141z"/>
    </EntypoIcon>
);

export default EntypoChevronSmallUp;
