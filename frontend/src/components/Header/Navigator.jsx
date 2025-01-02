import { forwardRef } from 'react';

const Navigator = forwardRef((props, ref) => {
    return (
        <>
            <button {...props} className='content-center my-2 px-3 py-1 border border-transparent rounded-full hover:bg-gray-400/20 transition-all duration-200'>
                {props.children}
            </button>
        </>
    )
})

export default Navigator;