import * as React from '../react/packages/react';
import { memo, useDeferredValue, useState } from '../react/packages/react';


const SlowList = memo(function SlowList({ text }) {
  // 仅打印一次。实际的减速是在 SlowItem 组件内部。
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

function SlowItem({ text }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 5) {
    // 每个 item 暂停 1ms，模拟极其缓慢的代码
  }

  return (
    <li className="item">
      Text: {text}
    </li>
  )
}

function DeferredFC () {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      {text}
      <SlowList text={deferredText} />
    </>
  );
}

export default DeferredFC