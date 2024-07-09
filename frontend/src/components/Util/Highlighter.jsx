import React from 'react';

const Highlighter = ({ bgColor, children, style }) => {

    return (
        <div className='relative whitespace-nowrap mx-1'>
            <div className={`${style} z-[41] relative`}>&nbsp;{children}&nbsp;</div>
            <div className={`${bgColor} z-40 absolute top-2 left-0 bg-red-500 w-full h-3/4 blur-sm opacity-60`}></div>
        </div>)
};

export default Highlighter;
