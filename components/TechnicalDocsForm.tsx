'use client';
import { useState } from 'react';

export default function TechnicalDocsForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon" aria-hidden="true">✓</div>
        <h3>Request Received</h3>
        <p>
          Thank you. Our engineering team will review your documentation request and respond to your work email within one business day.
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Questions? Contact <a href="mailto:i232064@isb.nu.edu.pk" className="text-link">i232064@isb.nu.edu.pk</a> or <a href="mailto:i232069@isb.nu.edu.pk" className="text-link">i232069@isb.nu.edu.pk</a>
        </p>
        <button
          type="button"
          className="button outline"
          style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      action="/contact"
      method="GET"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="doc-fullname">Full Name *</label>
          <input id="doc-fullname" type="text" required placeholder="John Doe" />
        </div>
        <div className="form-field">
          <label htmlFor="doc-email">Work Email *</label>
          <input
            id="doc-email"
            type="email"
            required
            placeholder="engineer@company.com"
            pattern="^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[^@]+\.[^@]+$"
            title="Please use your official work email."
          />
        </div>
        <div className="form-field">
          <label htmlFor="doc-org">Company / Operating Facility *</label>
          <input id="doc-org" type="text" required placeholder="e.g. Northern Water Authority" />
        </div>
        <div className="form-field">
          <label htmlFor="doc-title">Job Title / Role *</label>
          <input id="doc-title" type="text" required placeholder="e.g. Lead Control Systems Engineer" />
        </div>
        <div className="form-field">
          <label htmlFor="doc-sector">Industrial Sector *</label>
          <select id="doc-sector" required defaultValue="">
            <option value="" disabled>Select your sector...</option>
            <option value="water">Water & Wastewater</option>
            <option value="power">Power Generation & Utilities</option>
            <option value="oilgas">Oil & Gas / Refining</option>
            <option value="manufacturing">Manufacturing Automation</option>
            <option value="integrator">Systems Integrator / EPC</option>
            <option value="other">Other Industrial Sector</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="doc-request">Requested Documentation *</label>
          <select id="doc-request" required defaultValue="all">
            <option value="all">Complete Technical Package</option>
            <option value="hw">Mechanical & Power Specifications</option>
            <option value="dep">TAP Installation & Network Commissioning</option>
            <option value="int">Event Normalization & SIEM Schema</option>
            <option value="sec">Sensor Appliance Hardening Guide</option>
          </select>
        </div>
        <div className="form-field form-full">
          <label htmlFor="doc-purpose">Intended Use or Evaluation Scope</label>
          <textarea id="doc-purpose" rows={3} placeholder="Briefly describe your deployment timeline, facility type, or evaluation objectives..." />
        </div>
        <div className="form-full" style={{ marginTop: '1rem' }}>
          <button type="submit" className="button">
            Request Documentation
          </button>
          <p className="form-note">
            Confidentiality Note: Detailed hardware schematics are shared under bilateral non-disclosure. We never share or sell contact details.
          </p>
        </div>
      </div>
    </form>
  );
}
