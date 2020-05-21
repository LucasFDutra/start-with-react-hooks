import React, {useContext, useEffect} from 'react';
import ThemeContext from './Context'

const Button2 = (props) => {
    const theme = useContext(ThemeContext);
    console.log('aqui');
    
    return (
        <button style={{ background: theme.theme.dark.background, color: theme.theme.dark.foreground }}>
            Segundo botão
        </button>
    );
}

export default Button2;
