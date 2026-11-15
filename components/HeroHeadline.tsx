'use client';

import { useEffect, useState } from 'react';

const headline = 'See what’s happening in your industrial network.';
const characterCount = [...headline].filter(letter => letter !== ' ').length;

export default function HeroHeadline() {
  const [visible, setVisible] = useState<number | null>(null);
  useEffect(() => {
    const preference = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let timer = 0;
    function start() {
      window.clearTimeout(timer);
      if (!preference.matches) { setVisible(null); return; }
      let count = 0;
      setVisible(0);
      function next() {
        count++;
        setVisible(count);
        if (count < characterCount) timer = window.setTimeout(next, 65);
        else timer = window.setTimeout(() => setVisible(null), 600);
      }
      timer = window.setTimeout(next, 300);
    }
    start();
    preference.addEventListener('change', start);
    return () => { window.clearTimeout(timer); preference.removeEventListener('change', start); };
  }, []);
  let character = 0;
  function words(text: string) {
    return text.split(' ').map((word, index) => <span key={index} className="hero-word">{index > 0 && ' '}{[...word].map(letter => {
      character++;
      return <span key={character} className="hero-character" data-revealed={visible === null || character <= visible} data-caret={character === visible}>{letter}</span>;
    })}</span>);
  }
  return <h1 id="hero-title" aria-label={headline}><span aria-hidden="true">{words('See what’s happening')}<br className="desktop-break" />{' '}{words('in your industrial network.')}</span></h1>;
}
