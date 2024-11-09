import { forwardRef } from 'react';

const Navigator = forwardRef((props, ref) => {
    return (
        <>
            <button {...props} className='content-center p-3'>
                {props.children}
            </button>
        </>
    )
})

export default Navigator;