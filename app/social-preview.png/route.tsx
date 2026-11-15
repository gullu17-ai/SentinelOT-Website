import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
export const dynamic = 'force-static';
export function GET() {
  const mark = readFileSync(join(process.cwd(), 'public/media/sentinelot-mark.svg')).toString('base64');
  return new ImageResponse(<div style={{ display:'flex', flexDirection:'column', background:'#fff', width:'100%', height:'100%', padding:'64px', color:'#182d32', fontFamily:'sans-serif' }}>
    <div style={{ display:'flex', alignItems:'center', gap:18 }}><img src={`data:image/svg+xml;base64,${mark}`} width={82} height={51} alt="" /><div style={{ display:'flex', fontWeight:700, fontSize:36 }}>Sentinel<span style={{color:'#778f08'}}>OT</span></div></div>
    <div style={{display:'flex', marginTop:63, fontSize:65, fontWeight:600, lineHeight:1.06, letterSpacing:'-3px'}}>See what’s happening in your industrial network.</div>
    <div style={{display:'flex', marginTop:30, fontSize:24, color:'#536760'}}>Offline-first OT monitoring. Local data. Explainable alerts.</div>
    <div style={{display:'flex', marginTop:36, fontSize:17, color:'#68766e'}}>Research prototype · FAST NUCES Islamabad</div>
    <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:12,background:'#9bbd17'}} />
  </div>, { width:1200, height:630 });
}
