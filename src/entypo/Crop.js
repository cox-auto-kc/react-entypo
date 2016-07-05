import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Crop';

let EntypoCrop = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M6,14V1H4v3H1v2h3v8c0,1.0996094,0.8989258,2,2,2h8v3h2v-3h3v-2H6z M14,13h2V6c0-1.0996094-0.8989258-2-2-2H7v2h7V13z"/>
    </EntypoIcon>
);

export default EntypoCrop;
