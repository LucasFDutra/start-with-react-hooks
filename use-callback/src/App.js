import React, {useState, useCallback} from 'react';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(value => value + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button increment={increment} />
    </div>
  );
}

export default App;
