export default function Architecture() {
  return <section className="section architecture" id="how-it-works"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">How it works</p><h2>The SentinelOT<br />system architecture.</h2></div><p>The prototype runs in an isolated virtual lab. A future physical installation would receive a copy from a managed switch or network TAP.</p></div>
    <div className="architecture-diagram">
      <p className="diagram-label">Operational network / existing control path</p>
      <div className="network-pair equipment-row">
        <figure className="equipment-node"><div className="equipment-photo equipment-hmi"><img src="/media/architecture/hmi-panel.jpg" alt="Illustrative Siemens HMI panel from the FYP poster." width="640" height="359" loading="lazy" /></div><figcaption><strong>HMI / SCADA</strong><span>Operator interface</span></figcaption></figure>
        <span className="connector" aria-label="bidirectional control traffic">↔</span>
        <figure className="equipment-node"><div className="equipment-photo equipment-switch"><img src="/media/architecture/managed-switch.jpg" alt="Illustrative Moxa industrial managed switch from the FYP poster." width="456" height="456" loading="lazy" /></div><figcaption><strong>Managed switch</strong><span>Mirror port / SPAN</span></figcaption></figure>
        <span className="connector" aria-label="bidirectional control traffic">↔</span>
        <figure className="equipment-node"><div className="equipment-photo equipment-plc"><img src="/media/architecture/plc-controller.png" alt="Illustrative Siemens S7-1200 controller from the FYP poster, not the current virtual lab controller." width="1000" height="891" loading="lazy" /></div><figcaption><strong>PLC / RTU</strong><span>Process controller</span></figcaption></figure>
      </div>
      <div className="capture-line"><span aria-hidden="true">↓</span><p>SPAN / mirrored traffic<br /><strong>Capture connection · Copied packets only</strong></p></div>
      <div className="poster-appliance">
        <header className="poster-appliance-header"><img src="/media/sentinelot-mark.svg" alt="" width="80" height="60" /><div><h3>SentinelOT Appliance</h3><p>Raspberry Pi 5 · Planned hardware platform</p></div></header>
        <div className="poster-appliance-body">
          <figure className="poster-hardware"><div className="equipment-photo equipment-pi"><img src="/media/architecture/raspberry-pi-case.png" alt="Raspberry Pi case illustration from the FYP poster, representing the planned hardware platform." width="800" height="800" loading="lazy" /></div><figcaption>Hardware Platform</figcaption></figure>
          <div className="poster-modules">
            <div className="poster-discovery-row"><div className="poster-module">Passive Monitoring</div><span aria-label="then">→</span><div className="poster-module">Asset Discovery</div></div>
            <div className="poster-flow-down" aria-hidden="true">↓</div>
            <div className="poster-detection-row"><div className="poster-module">Rule-Based<br />Detection</div><div className="poster-module poster-roadmap">ML Anomaly<br />Detection<span>Roadmap</span></div><div className="poster-module">Offline Vulnerability<br />Assessment</div></div>
            <div className="poster-flow-down" aria-hidden="true">↓</div>
            <div className="poster-module poster-reporting">Alerting &amp; Reporting</div>
          </div>
        </div>
      </div>
      <div className="poster-dashboard-link"><span aria-hidden="true">↓</span><p>Separate management connection</p></div>
      <figure className="poster-dashboard">
        <div className="poster-laptop"><div className="poster-laptop-screen"><img src="/media/asset-inventory-current.jpg" alt="SentinelOT asset inventory dashboard captured from the running prototype on 15 November 2026, with retained lab data and Data Stale status." width="1280" height="720" loading="lazy" /></div><div className="poster-laptop-base" aria-hidden="true" /></div>
        <figcaption><strong>Local Security Dashboard</strong><span>Assets · Protocol events · Alerts · Network map · Vulnerabilities</span><small>Actual prototype screenshot · Retained lab data</small><a href="#platform">Explore dashboard views <span aria-hidden="true">↑</span></a></figcaption>
      </figure>
    </div>
    <p className="equipment-caption">Equipment illustrations reused from the FYP poster. They show the proposed physical architecture, not a verified deployment or vendor endorsement. A network TAP can provide the copied traffic in place of a switch mirror port.</p>
    <div className="architecture-notes"><p><strong>Capture stays passive.</strong> Copied packets feed the sensor; the sensor is not an inline gateway or enforcement device.</p><p><strong>Management has its own path.</strong> Operator access belongs on a separate designated connection. Physical separation still needs field validation.</p></div>
  </div></section>;
}
