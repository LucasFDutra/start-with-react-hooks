import React, {useState} from 'react';
import Button from './Button';
import Button2 from './Button2';
import ThemeContext from './Context'
import themes from './Themes';

function App() {
  const [theme, setTheme] = useState(themes);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Button />
      <Button2 />
    </ThemeContext.Provider>
  );
}

export default App;
