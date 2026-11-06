'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon" aria-hidden="true">✓</div>
        <h3>Pilot Application Received</h3>
        <p>
          Thank you. Your operational network parameters have been logged. Our engineering team will review your requirements and reach out within 24 hours.
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
          Direct contact: <a href="mailto:i232064@isb.nu.edu.pk" className="text-link">i232064@isb.nu.edu.pk</a> · <a href="mailto:i232069@isb.nu.edu.pk" className="text-link">i232069@isb.nu.edu.pk</a>
        </p>
        <button
          type="button"
          className="button outline"
          style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
          onClick={() => setSubmitted(false)}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form
      action="/"
      method="GET"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="pi-name">Full Name *</label>
          <input id="pi-name" type="text" required placeholder="John Doe" />
        </div>
        <div className="form-field">
          <label htmlFor="pi-email">Corporate Work Email *</label>
          <input
            id="pi-email"
            type="email"
            required
            placeholder="operator@company.com"
            pattern="^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[^@]+\.[^@]+$"
            title="Corporate email required."
          />
        </div>
        <div className="form-field">
          <label htmlFor="pi-company">Operating Authority / Company *</label>
          <input id="pi-company" type="text" required placeholder="e.g. Metro Water & Power Authority" />
        </div>
        <div className="form-field">
          <label htmlFor="pi-role">Job Title / Role *</label>
          <input id="pi-role" type="text" required placeholder="e.g. Lead OT Systems Engineer" />
        </div>
        <div className="form-field">
          <label htmlFor="pi-sector">Primary Industry Sector *</label>
          <select id="pi-sector" required defaultValue="">
            <option value="" disabled>Select sector...</option>
            <option value="water">Water & Wastewater Treatment</option>
            <option value="power">Power Generation & Electric Utilities</option>
            <option value="oilgas">Oil & Gas / Refining / Petrochemicals</option>
            <option value="manufacturing">Advanced Discrete Manufacturing</option>
            <option value="other">Other Critical Infrastructure</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="pi-region">Facility Geographic Region *</label>
          <select id="pi-region" required defaultValue="">
            <option value="" disabled>Select geographic region...</option>
            <option value="gcc">Middle East & GCC</option>
            <option value="eu">European Union / UK</option>
            <option value="na">North America</option>
            <option value="apac">Asia-Pacific / South Asia</option>
          </select>
        </div>
        <div className="form-field form-full">
          <label htmlFor="pi-protocols">Observed Industrial Protocols in Scope *</label>
          <input id="pi-protocols" type="text" required placeholder="e.g. Modbus TCP, DNP3, Siemens S7comm, Ethernet/IP" />
        </div>
        <div className="form-field form-full">
          <label htmlFor="pi-scope">Pilot Objectives & Network Scope</label>
          <textarea
            id="pi-scope"
            rows={3}
            placeholder="Brief summary of your evaluation goals (e.g. asset discovery verification, unauthorized setpoint monitoring) without naming confidential IPs..."
          />
        </div>
        <div className="form-full">
          <label className="form-check">
            <input type="checkbox" required />
            <span>I confirm that I am an authorized engineering, operations, or security representative of this operating facility.</span>
          </label>
        </div>
        <div className="form-full" style={{ marginTop: '1rem' }}>
          <button type="submit" className="button">
            Submit Application for Private Pilot
          </button>
          <p className="form-note">
            Confidentiality Guarantee: All applicant information is treated under strict non-disclosure. We do not sell, share, or publicly display applicant names, corporate entities, or network specifics.
          </p>
        </div>
      </div>
    </form>
  );
}
