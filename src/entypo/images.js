import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--images';

let EntypoImages = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M17.125,6.17l-2.046-5.635c-0.151-0.416-0.595-0.637-0.989-0.492L0.492,5.006C0.098,5.15-0.101,5.603,0.051,6.019l2.156,5.941V8.777c0-1.438,1.148-2.607,2.56-2.607H8.36l4.285-3.008l2.479,3.008H17.125z M19.238,8H4.767c-0.42,0-0.762,0.334-0.762,0.777v9.42C4.006,18.641,4.348,19,4.767,19h14.471C19.658,19,20,18.641,20,18.197v-9.42C20,8.334,19.658,8,19.238,8z M18,17H6v-2l1.984-4.018l2.768,3.436l2.598-2.662l3.338-1.205L18,14V17z"/>
    </EntypoIcon>
);

export default EntypoImages;
