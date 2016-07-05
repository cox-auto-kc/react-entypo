import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ChevronThinUp';

let EntypoChevronThinUp = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z"/>
    </EntypoIcon>
);

export default EntypoChevronThinUp;
