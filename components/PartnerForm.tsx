'use client';
import { useState } from 'react';

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon" aria-hidden="true">✓</div>
        <h3>Partner Application Received</h3>
        <p>
          Thank you for applying to the SentinelOT Partner Network. Our team will review your organization's qualifications and respond within 2 business days.
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
      action="/contact"
      method="GET"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="pt-name">Primary Contact Name *</label>
          <input id="pt-name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className="form-field">
          <label htmlFor="pt-email">Corporate Business Email *</label>
          <input
            id="pt-email"
            type="email"
            required
            placeholder="partner@company.com"
            pattern="^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[^@]+\.[^@]+$"
            title="Corporate email required."
          />
        </div>
        <div className="form-field">
          <label htmlFor="pt-org">Organization Name *</label>
          <input id="pt-org" type="text" required placeholder="e.g. Apex Industrial Controls" />
        </div>
        <div className="form-field">
          <label htmlFor="pt-type">Organization Type *</label>
          <select id="pt-type" required defaultValue="">
            <option value="" disabled>Select organization type...</option>
            <option value="integrator">Certified OT Systems Integrator / EPC</option>
            <option value="mssp">Managed OT Security Service Provider (MSSP)</option>
            <option value="distributor">Industrial Automation Distributor</option>
            <option value="consultancy">Cybersecurity Engineering Consultancy</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="pt-region">Primary Geographic Market *</label>
          <select id="pt-region" required defaultValue="">
            <option value="" disabled>Select primary market...</option>
            <option value="gcc">Middle East & GCC Region</option>
            <option value="eu">European Union / UK</option>
            <option value="na">North America</option>
            <option value="apac">Asia-Pacific / South Asia</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="pt-sectors">Core Industrial Sectors Served *</label>
          <input id="pt-sectors" type="text" required placeholder="e.g. Water Treatment, Oil & Gas, Power" />
        </div>
        <div className="form-field form-full">
          <label htmlFor="pt-notes">Partnership Goals & Client Testbed Scope</label>
          <textarea id="pt-notes" rows={3} placeholder="Tell us about your client deployment requirements or lab evaluation plans..." />
        </div>
        <div className="form-full" style={{ marginTop: '1rem' }}>
          <button type="submit" className="button">
            Submit Partner Application
          </button>
          <p className="form-note">
            Confidentiality Guarantee: Partner details are treated under strict commercial confidentiality. Partner names and logos are published strictly under executed bilateral marketing agreements.
          </p>
        </div>
      </div>
    </form>
  );
}
