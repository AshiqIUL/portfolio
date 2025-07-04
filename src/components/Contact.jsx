import React from 'react'

import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (This form is not yet connected)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="col-md-8 mx-auto">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="4" value={form.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

