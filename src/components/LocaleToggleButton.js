// LocaleToggleButton.js
import React from 'react';
import { useLocale } from './LocaleContext';

const LocaleToggleButton = () => {
    const { locale, setLocale } = useLocale();

    const toggleLocale = () => {
        if (locale === 'en-US') {
            setLocale('es'); // Example: Switch to Spanish
        } else {
            setLocale('en-US'); // Switch back to English
        }
    };

    return (
        <button onClick={toggleLocale}>
            Switch to {locale === 'en-US' ? 'es' : 'English'}
        </button>
    );
};

export default LocaleToggleButton;
