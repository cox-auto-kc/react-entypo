import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--chevronThinDown';

let EntypoChevronThinDown = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0c0.27,0.268,0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z"/>
    </EntypoIcon>
);

export default EntypoChevronThinDown;
