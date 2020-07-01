import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";
import Button from "react-bootstrap/Button";

const ThemeTogglerButton = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <Button onClick={toggleTheme} className="mb-3" variant="secondary">
            Toggle Theme
        </Button>
    );
};

export default ThemeTogglerButton;
