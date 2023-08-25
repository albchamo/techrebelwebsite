// LocaleContext.js
import React, { createContext, useState, useContext } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState('en-US'); // Default locale

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    return useContext(LocaleContext);
};
