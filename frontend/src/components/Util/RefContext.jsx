import React, { createContext, useRef } from 'react';

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
    const refs = {
        projectsRef: useRef(null),
        aboutRef: useRef(null),
        contactRef: useRef(null),
    };

    return (
        <RefContext.Provider value={refs}>
            {children}
        </RefContext.Provider>
    );
};

export const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
};