import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--leaf';

let EntypoLeaf = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M19.025,3.587c-4.356,2.556-4.044,7.806-7.096,10.175c-2.297,1.783-5.538,0.88-7.412,0.113c0,0-1.27,1.603-2.181,3.74c-0.305,0.717-1.644-0.073-1.409-0.68C3.905,9.25,14.037,5.416,14.037,5.416S6.888,5.113,2.11,11.356C1.982,9.93,1.77,6.072,5.47,3.706C10.486,0.495,20.042,2.991,19.025,3.587z"/>
    </EntypoIcon>
);

export default EntypoLeaf;
