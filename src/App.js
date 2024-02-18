import * as React from './react/packages/react';
import { useEffect, createElement, useState } from './react/packages/react';
// import LifeCycles from './LifeCycles'
// import HookComponents from './Hook'
// import ClassComponents from './Class'
// import ParentComponent from './ParentComponent'
// import ChildComponent from './ChildComponent'
// import Hook from './Hook's's

export default function App() {
  const [value, setValue] = useState(1);
  return (
    <>
      <div>{value}</div>
      <div>465456</div>
    </>
  );
}

// class App extends React.Component {

//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <div className="app-component-wrap">
//         <Hook />
//       </div>
//     )
//   }
// }
