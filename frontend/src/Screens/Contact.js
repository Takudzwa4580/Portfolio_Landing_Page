import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container col-lg-8 my-5 flex-grow-1">
        <h2>Let's talk about your project</h2>

        {submitted && (
          <div className="alert alert-success my-4" role="alert">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`form-control mb-4 ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`form-control mb-4 ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}

            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              className={`form-control mb-4 ${errors.message ? "is-invalid" : ""}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-dark">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
