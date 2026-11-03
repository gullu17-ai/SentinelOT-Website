import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
export const dynamic = 'force-static';
export function GET() {
 const logo = readFileSync(join(process.cwd(), 'public/media/sentinelot-logo.png')).toString('base64');
 return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', background: '#f3f5f2', width: '100%', height: '100%', padding: '65px', color: '#233137', fontFamily: 'sans-serif' }}><img src={`data:image/png;base64,${logo}`} width={420} height={69} alt="SentinelOT" /><div style={{ display: 'flex', marginTop: '72px', fontSize: 60, lineHeight: 1.12, letterSpacing: '-2px', maxWidth: 1000 }}>Offline-first visibility for industrial networks.</div><div style={{ display: 'flex', marginTop: '48px', fontSize: 24, color: '#084e50' }}>Research prototype · FAST NUCES Islamabad</div><div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 14, background: '#bdcf39' }} /></div>, { width: 1200, height: 630 });
}
