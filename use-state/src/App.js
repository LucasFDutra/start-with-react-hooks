import React, {useState} from 'react';

function App() {
  // define a variável count com o valor inicial 0, e a função setCount como sendo a responsável por alterar o valor de count
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} >Add +1</button>
    </div>
  );
}

export default App;
