import React, {useContext} from 'react';
import ThemeContext from './Context'

const Button = (props) => {
    const theme = useContext(ThemeContext);
    const newTheme = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ff79c6",
            background: "#282a36"
        }
    };

    return (
        <button style={{ background: theme.theme.dark.background, color: theme.theme.dark.foreground }} onClick={() => theme.setTheme(newTheme)}>
            Primeiro Botão
        </button>
    );
}

export default Button;
