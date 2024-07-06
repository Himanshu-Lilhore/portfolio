import React, { createContext, useContext, useState, useRef, useEffect } from 'react'

const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {

    const [scrollVal, setScrollVal] = useState(0);
    const oldScrollVal = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (Math.abs(oldScrollVal.current - scrollY) > 2) {
                setScrollVal(prevScrollVal => {
                    oldScrollVal.current = scrollY;
                    return scrollY;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (
        <ScrollContext.Provider value={{ scrollVal, setScrollVal }}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => {
    return useContext(ScrollContext)
}