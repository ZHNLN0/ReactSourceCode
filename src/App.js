import * as React from './react/packages/react';
import { useEffect, createElement, useState, useRef } from './react/packages/react';

import MyFun from './views/MyFun.js';
// import MyClass from './views/MyClass.js';
import Counter from './views/Counter.js';
import BadFC from './views/BadFC.js';
import TabContainer from './views/TransitionFC';
import DeferredFC from './views/DeferredFC'

export default function App(props) {
  const ref = useRef(null)
  const [count, setCount] = useState(1)
  const [mountState, setMountState] = useState(true)
  // useEffect(() => {
  //   console.log(ref)
  // }, [])
  
  return (
    <div className="App">
      <BadFC />
      <div ref={ref} onClick={() => {setMountState(!mountState)}}>react源码调试</div>
      {mountState}
      <MyFun name='MyFun'></MyFun>
      <Counter />
      <TabContainer />
      {/* <MyClass name='MyClass'></MyClass> */}
      {/* { mountState &&  <Counter />} */}
      <DeferredFC />
    </div>
  );
}

