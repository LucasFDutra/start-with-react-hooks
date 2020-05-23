import React, { useState, useMemo } from "react";

function computeLongestWord(data) {
  console.log('verificando palavras');
  if (data[0].lenght > data[1].lenght){
    return data[0];
  } else {
    return data[1];
  }
}

const data = ['palavra', 'outra palavra']

const App = () => {
  const [count, setCount] = useState(0);

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default App;