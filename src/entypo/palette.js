import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--palette';

let EntypoPalette = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M15.74,2.608C12.212,1.422,8.674,1.647,5.02,3.882c-2.853,1.743-4.718,6.076-4.103,9.182c0.728,3.671,4.351,5.995,9.243,4.651c5.275-1.449,6.549-4.546,6.379-5.334c-0.17-0.788-2.665-1.652-1.718-3.498c1.188-2.313,3.129-1.149,3.982-1.622C19.658,6.789,19.342,3.819,15.74,2.608z M12.094,13.314c-0.798,0.218-1.623-0.256-1.843-1.059c-0.221-0.805,0.248-1.631,1.046-1.849c0.798-0.218,1.622,0.254,1.843,1.059C13.36,12.268,12.892,13.096,12.094,13.314z"/>
    </EntypoIcon>
);

export default EntypoPalette;
