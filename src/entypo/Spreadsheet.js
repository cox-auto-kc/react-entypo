import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Spreadsheet';

let EntypoSpreadsheet = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z M15,8H9v9H8V8H5V7h3V3h1v4h6V8z"/>
    </EntypoIcon>
);

export default EntypoSpreadsheet;
