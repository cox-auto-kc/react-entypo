import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--ChevronThinLeft';

let EntypoChevronThinLeft = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979c-0.268,0.27-0.701,0.271-0.969,0l-7.83-7.908c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418z"/>
    </EntypoIcon>
);

export default EntypoChevronThinLeft;
