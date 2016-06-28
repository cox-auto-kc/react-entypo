import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--archive';

let EntypoArchive = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M13.981,2H6.018c0,0-0.996,0-0.996,1h9.955C14.977,2,13.981,2,13.981,2z M16.968,5c0-1-0.995-1-0.995-1H4.027c0,0-0.995,0-0.995,1v1h13.936V5z M18.958,6C18.37,5.408,18.37,5.408,18.37,5.408V7H1.63V5.408c0,0,0,0-0.589,0.592C0.452,6.592,0.03,6.75,0.267,8c0.236,1.246,1.379,8.076,1.549,9c0.186,1.014,1.217,1,1.217,1h13.936c0,0,1.03,0.014,1.217-1c0.17-0.924,1.312-7.754,1.549-9C19.97,6.75,19.548,6.592,18.958,6z M14,11.997C14,12.551,13.551,13,12.997,13H7.003C6.449,13,6,12.551,6,11.997V10h1v2h6v-2h1V11.997z"/>
    </EntypoIcon>
);

export default EntypoArchive;
