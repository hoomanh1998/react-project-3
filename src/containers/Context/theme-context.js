import {createContext} from 'react';

export const themes = {
    dark: {
        background:'dark',
        varient:'dark'
    },
    blue: {
        background: 'primary',
        varient: 'dark'
    }
}

export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

export default ThemeContext;