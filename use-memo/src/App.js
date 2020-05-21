import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('montagem do componente');
  }, []);
  
  useEffect(() => {
    console.log('atualização do componente');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} >Add +1</button>
    </div>
  );
}

export default App;
