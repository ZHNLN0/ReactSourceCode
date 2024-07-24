import * as React from '../react/packages/react';
import { useState, useEffect, useLayoutEffect, useRef } from '../react/packages/react';
function Counter() {
  const [show, setShow] = useState(false);
  const [addOne, setAddOne] = useState(0);

  function handleClick() {
    setAddOne(addOne + 1);
    setShow(!show)
  }

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>show</button>
      {addOne}
      {show && <CounterChild/>}
    </div>
  );
}


function CounterChild() {
  return (
    <div>CounterChild</div>
  )
}

export default Counter
