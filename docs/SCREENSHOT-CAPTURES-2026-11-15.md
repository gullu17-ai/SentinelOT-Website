# Screenshot captures: 15 November 2026

Source: the already-running local SentinelOT dashboard at http://localhost:5000/ .
Captured with the browser screenshot API, without image edits or DOM alteration.
All files are JPEG, 1280 × 720 pixels, under `public/media/`.

The dashboard was in snapshot mode and reported **Data Stale**. Captures show the current interface with retained lab data. They do not demonstrate fresh traffic, field validation or comprehensive protocol coverage. Product counters visible inside captures are observations of that stored data, not performance claims.

| View | Source fragment | File | SHA-256 |
| --- | --- | --- | --- |
| Asset Inventory | #assets | asset-inventory-current.jpg | 8e59105dbc6f56ae2b98be3aa4d2065aff3c6bd31ff425a776262fc578bf67e0 |
| Protocol Events | #events | protocol-events-current.jpg | b23e991c2fe6644910301acf344c2dfe2e889e367d8067cfee54198ed8184aee |
| Alerts | #alerts | alerts-current.jpg | 9259dd962de034e7be75d632540048cefd940013dcb7490e283cbbd668be2ced |
| Network Map | #network | network-map-current.jpg | 5ac7456929fd2275e5eecfd06e8e39a0c29f93ca4b8c7a49a5ccda2f82273ed0 |
| Vulnerabilities | #vulnerabilities | vulnerabilities-current.jpg | 9dfbc0d2bce4ab7533c5e772484a44a9a84c782763fedb1bacf77ffba54d6231 |

## Capture conditions

- The existing Flask service and Zeek process were already running and were reused.
- No PLC/HMI writes, traffic generators, rule changes, identity edits, alert transitions or service restarts were performed.
- Existing navigation controls selected each view. Captures were taken after visible loading states resolved.
- The network map's Zoom in control was used twice. This changes only the rendered view.
- The vulnerability screenshot shows candidate CVEs and an identity gap; matching does not establish exploitability.
- The approved website circuit monogram is separate from the older dashboard logo preserved in the screenshots.
- The new images replace the older gallery assets. The demo section uses the current alert screenshot as a clearly labeled still. There is still no demonstration recording.
- No GitHub push or publication.
