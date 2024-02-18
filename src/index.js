window.__DEV__ = false

import * as React from './react/packages/react';
import {
  createElement
} from './react/packages/react'
import {  createRoot } from './react/packages/react-dom/client';
// import List from './List'
// import Suspense from './Suspense'
// import MemoComponent from './MemoComponent'
import App from './App'

// createRoot 初始化了内部Fiber根节点，并把该根节点挂载到了真实节点上，以及处理了事件委托到真实节点 这里的真实节点就是 root 节点
createRoot(document.getElementById('root')).render(createElement(App))

// .render(<App />) 等同于 .render(createElement(App)) 所以这就需要先去了解 createElement的执行
// 在 JSX 中我们的写的 return HTML的内容会被babel 处理成 createElement 的函数（直接转代码写到打包后的JS文件中）
// createElement 会放回一个描述当前 jsx 的数据结构，注意该数据接口并不是 Fiber 数据接口