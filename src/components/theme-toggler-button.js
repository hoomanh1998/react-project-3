import React from 'react';
import { ThemeContext } from './theme-context';
import Button from 'react-bootstrap/Button';

const ThemeTogglerButton = () => {
    return (
        <ThemeContext.Consumer>
            {({ toggleTheme }) => (
                <Button
                    onClick={toggleTheme}
                    className="ml-3"
                    variant="primary">
                    Toggle Theme
                </Button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;