"use client";

import { useState } from "react";

export function ContactClient() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const type = String(fd.get("type") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const newErrors: Record<string, boolean> = {
      name: name.length <= 1,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      type: type.length === 0,
      message: message.length <= 4,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, type, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) {
          setErrors({
            name: !!data.fields.name,
            email: !!data.fields.email,
            type: !!data.fields.type,
            message: !!data.fields.message,
          });
        }
        setServerError(data.error || "Something went wrong. Please try again or email directly.");
        return;
      }
      setSent(true);
    } catch {
      setServerError("Network error. Please email thelnuaein5450@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-grid">
      <form className="contact-form reveal in" noValidate onSubmit={onSubmit}>
        {!sent ? (
          <div className="form-fields">
            <div className="field-row">
              <div className={`field ${errors.name ? "error" : ""}`}>
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" autoComplete="name" />
                <div className="err-msg">Please enter your name.</div>
              </div>
              <div className={`field ${errors.email ? "error" : ""}`}>
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" />
                <div className="err-msg">Please enter a valid email.</div>
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-company">Company / Team</label>
                <input id="cf-company" name="company" type="text" />
              </div>
              <div className={`field ${errors.type ? "error" : ""}`}>
                <label htmlFor="cf-type">Project type</label>
                <div className="select-wrap">
                  <select id="cf-type" name="type" defaultValue="" required>
                    <option value="" disabled hidden>
                      Select one
                    </option>
                    <option>Mobile App</option>
                    <option>Web Product</option>
                    <option>Dashboard</option>
                    <option>Product Redesign</option>
                    <option>Freelance Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="err-msg">Please choose a project type.</div>
              </div>
            </div>
            <div className={`field ${errors.message ? "error" : ""}`}>
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" />
              <div className="err-msg">Tell me a little about the project.</div>
            </div>
            {serverError && (
              <div
                role="alert"
                style={{
                  marginBottom: 16,
                  padding: "12px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid rgba(240,68,56,0.4)",
                  background: "rgba(240,68,56,0.08)",
                  color: "#ff9a93",
                  fontSize: 13,
                }}
              >
                {serverError}
              </div>
            )}
            <button className="btn btn-primary magnetic" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Inquiry"} <span className="arrow">→</span>
            </button>
          </div>
        ) : (
          <div className="form-success show">
            <h2 style={{ fontSize: 32 }}>Thank you.</h2>
            <p style={{ color: "var(--text-dim)", maxWidth: "40ch" }}>
              Your inquiry has been noted — I&apos;ll get back to you soon at the email you provided.
            </p>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => {
                setSent(false);
                setErrors({});
              }}
            >
              Send another
            </button>
          </div>
        )}
      </form>

      <div className="contact-side reveal in">
        <div className="side-card">
          <h5>Email</h5>
          <a href="mailto:thelnuaein5450@gmail.com">thelnuaein5450@gmail.com</a>
        </div>
        <div className="side-card">
          <h5>Availability</h5>
          <p>
            <span className="pill">
              <span className="live-dot" /> Open to opportunities / collaborations
            </span>
          </p>
        </div>
        <div className="side-card">
          <h5>Elsewhere</h5>
          <div className="side-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
