import * as React from '../react/packages/react';
import { useState, useTransition, memo } from '../react/packages/react';


export default function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  // function selectTab(nextTab) {
  //   setTab(nextTab)
  // }

  function selectTab(nextTab) {
    startTransition(() => {
      
      setTimeout(() => {
        setTab('contact');
      }, 0)
    });
  }

  return (
    <div>
      <TabButton
        isActive={tab === 'about'}
        onClick={() => selectTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        onClick={() => selectTab('posts')}
      >
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </div>
  );
}

function AboutTab() {
  return (
    <p>Welcome to my profile!</p>
  );
}

const PostsTab = function PostsTab() {
  // 打印一次。真正变慢的地方在 SlowPost 内。
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
};

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 2) {
    // 每个 item 都等待 1 毫秒以模拟极慢的代码。
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

function ContactTab() {
  return (
    <>
      <p>
        You can find me online here:
      </p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}

function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <b>{children}</b>
  }
  return (
    <button onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}
