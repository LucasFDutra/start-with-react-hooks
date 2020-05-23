import React, {memo} from 'react';

const Button = memo(({increment}) => {
  console.log('render');
  return(
    <div>
      <button onClick={() => increment()}>Add + 1</button>
    </div>
  );
}
)

export default Button;
