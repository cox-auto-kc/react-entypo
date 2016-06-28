import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--map';

let EntypoMap = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M19.447,3.718l-6-3c-0.281-0.141-0.613-0.141-0.895,0l-5.63,2.815L1.316,1.664C1.01,1.562,0.676,1.613,0.415,1.802C0.154,1.99,0,2.292,0,2.613v13.001c0,0.379,0.214,0.725,0.553,0.894l6,3c0.141,0.07,0.294,0.106,0.447,0.106s0.307-0.035,0.447-0.106l5.63-2.814l5.606,1.869c0.305,0.1,0.64,0.049,0.901-0.139c0.261-0.188,0.415-0.49,0.415-0.81V4.612C20,4.233,19.786,3.887,19.447,3.718z M8,5.231l4-2v11.763l-4,2V5.231z M2,4l4,1.333v11.661l-4-2V4z M18,16.227l-4-1.334V3.231l4,2V16.227z"/>
    </EntypoIcon>
);

export default EntypoMap;
