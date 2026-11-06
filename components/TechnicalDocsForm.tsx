'use client';
import { useState } from 'react';

export default function TechnicalDocsForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon" aria-hidden="true">✓</div>
        <h3>Documentation Request Submitted</h3>
        <p>
          Your verification request has been received. Our engineering security team will review your organizational domain within 24 hours. Approved requests receive an encrypted, time-limited download link.
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Verification inquiries: <a href="mailto:i232064@isb.nu.edu.pk" className="text-link">i232064@isb.nu.edu.pk</a> · <a href="mailto:i232069@isb.nu.edu.pk" className="text-link">i232069@isb.nu.edu.pk</a>
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
          <label htmlFor="doc-email">Corporate Work Email *</label>
          <input
            id="doc-email"
            type="email"
            required
            placeholder="operator@company.com"
            pattern="^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[^@]+\.[^@]+$"
            title="Please use your official corporate or institutional email."
          />
        </div>
        <div className="form-field">
          <label htmlFor="doc-org">Operating Facility / Organization *</label>
          <input id="doc-org" type="text" required placeholder="e.g. Northern Water Authority" />
        </div>
        <div className="form-field">
          <label htmlFor="doc-title">Job Title / Operational Role *</label>
          <input id="doc-title" type="text" required placeholder="e.g. OT Security Architect" />
        </div>
        <div className="form-field">
          <label htmlFor="doc-sector">Primary Industry Sector *</label>
          <select id="doc-sector" required defaultValue="">
            <option value="" disabled>Select your sector...</option>
            <option value="water">Water & Wastewater</option>
            <option value="power">Power Generation & Electric Utilities</option>
            <option value="oilgas">Oil & Gas / Petrochemicals</option>
            <option value="manufacturing">Advanced Discrete Manufacturing</option>
            <option value="integrator">OT System Integrator / EPC</option>
            <option value="other">Other Industrial Sector</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="doc-request">Requested Document Package *</label>
          <select id="doc-request" required defaultValue="all">
            <option value="all">Complete Technical Package (DOC-01 through 04)</option>
            <option value="hw">DOC-HW-01 (Hardware & Thermal Specs)</option>
            <option value="dep">DOC-DEP-02 (TAP & Substation Deployment)</option>
            <option value="int">DOC-INT-03 (Syslog / SIEM Integration)</option>
            <option value="sec">DOC-SEC-04 (Appliance Hardening Guide)</option>
          </select>
        </div>
        <div className="form-field form-full">
          <label htmlFor="doc-purpose">Intended Technical Purpose *</label>
          <textarea id="doc-purpose" rows={3} required placeholder="Brief description of your intended pilot evaluation or architectural review scope..." />
        </div>
        <div className="form-full">
          <label className="form-check">
            <input type="checkbox" required />
            <span>I acknowledge that all technical documentation provided through this portal is proprietary, confidential, and governed by bilateral non-disclosure terms.</span>
          </label>
        </div>
        <div className="form-full" style={{ marginTop: '1rem' }}>
          <button type="submit" className="button">
            Submit Documentation Request
          </button>
          <p className="form-note">
            Confidentiality Notice: Your email will never be shared with third parties or marketing lists. Verification checks are executed strictly to protect critical infrastructure trade secrets.
          </p>
        </div>
      </div>
    </form>
  );
}
