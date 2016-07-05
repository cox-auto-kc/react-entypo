import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--CreditCard';

let EntypoCreditCard = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18,3H2C0.899,3,0,3.9,0,5v10c0,1.1,0.899,2,2,2h16c1.1,0,2-0.9,2-2V5C20,3.9,19.1,3,18,3z M18,15H2V9h16V15z M18,6H2V5h16V6z M4,11.1v0.6h0.6v-0.6H4z M7.6,12.299V12.9h1.2v-0.601h0.6v-0.6H10v-0.6H8.8v0.6H8.199v0.6H7.6z M10,12.9v-0.601H9.399V12.9H10z M7,12.9v-0.601H5.8V12.9H7z M7.6,11.699h0.6v-0.6H7v1.199h0.6V11.699z M5.199,12.299H5.8v-0.6h0.6v-0.6h-1.2v0.6H4.6v0.6H4V12.9h1.199V12.299z"/>
    </EntypoIcon>
);

export default EntypoCreditCard;
