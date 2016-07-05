import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--AreaGraph';

let EntypoAreaGraph = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M20,2v16H0.32c-0.318,0-0.416-0.209-0.216-0.465l4.469-5.748c0.199-0.256,0.553-0.283,0.789-0.062l1.419,1.334c0.235,0.221,0.572,0.178,0.747-0.096l3.047-4.74c0.175-0.273,0.509-0.312,0.741-0.09l2.171,2.096c0.232,0.225,0.559,0.18,0.724-0.1l5.133-7.785C19.51,2.062,19.75,2,20,2z"/>
    </EntypoIcon>
);

export default EntypoAreaGraph;
