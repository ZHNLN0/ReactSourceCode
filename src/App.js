import * as React from './react/packages/react';
import { useEffect, createElement, useState, useRef } from './react/packages/react';

import MyFun from './views/MyFun.js';
// import MyClass from './views/MyClass.js';
import Counter from './views/Counter.js';

export default function App(props) {
  const ref = useRef(null)
  const [count, setCount] = useState(1)
  useEffect(() => {
    console.log(ref)
  }, [])
  
  return (
    <div className="App">
      <div ref={ref}>react源码调试</div>
      <MyFun name='MyFun'></MyFun>
      {/* <MyClass name='MyClass'></MyClass> */}
      <Counter />
    </div>
  );
}

