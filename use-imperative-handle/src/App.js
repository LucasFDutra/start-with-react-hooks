import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';

const ComponentWithButton = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({increment}))
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <button onClick={increment}>click</button>
      <h2>Count: {count}</h2>
    </div>
  )
})


const App = () => {
  const ref = useRef();
  return (
    <div>
      <ComponentWithButton ref={ref} />
      <button onClick={() => ref.current.increment()}>another button</button>
    </div>
  );
};

export default App;
