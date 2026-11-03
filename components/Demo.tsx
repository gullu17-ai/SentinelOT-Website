'use client';
import { useState } from 'react';
import { demoMedia } from '@/lib/content';
export default function Demo() {
 const [error, setError] = useState(false);
 return <div className="demo-layout">
   <div className="demo-evidence">
    {demoMedia ? <><video controls playsInline preload="metadata" poster={demoMedia.poster} onError={() => setError(true)}><source src={demoMedia.src} type="video/mp4" /><track kind="captions" src={demoMedia.captions} srcLang="en" label="English" default />Your browser does not support this video.</video>{error && <p role="alert">The demo could not be loaded. The transcript below remains available.</p>}<details><summary>Read the transcript</summary><p className="transcript">{demoMedia.transcript}</p></details></> : <><img src="/media/alerts.png" alt="Existing lab alert screenshot. This is a still image, not a demo recording." width="1548" height="684" loading="lazy" /><div className="recording-note"><span className="eyebrow">Demo recording pending</span><p>The verified recording, captions and transcript have not been supplied. This still shows the existing lab alert view.</p></div></>}
   </div>
   <div className="demo-story"><span className="eyebrow">{demoMedia ? 'Inside the demonstration' : 'Planned demonstration sequence'}</span><ol>
     <li><strong>Establish normal behaviour</strong><p>FUXA displays the tank level, setpoint and pump state during ordinary operation.</p></li>
     <li><strong>Make a controlled lab write</strong><p>An explicit test changes a process value in the isolated lab.</p></li>
     <li><strong>Observe the process change</strong><p>Compare the resulting values with the normal tank behaviour.</p></li>
     <li><strong>Trace the alert</strong><p>Review the matching SentinelOT rule and associated protocol evidence.</p></li>
   </ol><p className="small-copy">A lab scenario demonstrates a specific path. It does not establish detection effectiveness in an operating plant.</p></div>
 </div>;
}
