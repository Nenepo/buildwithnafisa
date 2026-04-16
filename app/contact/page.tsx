"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";
import styles from "./contact.module.css";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Something went wrong");

    setSubmitted(true);
    toast.success("Message sent successfully! I will get back to you in a few hours.");

    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 2000);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <main>
      <Nav />
      <div style={{ paddingTop: "60px" }}>
        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1>Let&apos;s Build Something Great</h1>
              <p className={styles.subtitle}>
                Have a project in mind? Let me know what you&apos;re working on,
                and I usually reply within a few hours.
              </p>
            </div>

            <div className={styles.grid}>
              <div className={styles.formSection}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">What&apos;s your name?</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Your email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject">What&apos;s this about?</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Building a new SaaS app"
                      aria-required="false"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell me more</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your project, timeline, budget... whatever helps me understand your needs."
                      rows={6}
                      required
                      aria-required="true"
                    />
                  </div>

                  <button type="submit" className={styles.submit}>
                    {submitted ? "Message sent! 🎉" : "Send message"}
                  </button>
                </form>
              </div>

              <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                  <h3>📧 Email</h3>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>

                <div className={styles.infoCard}>
                  <h3>⏱️ Response Time</h3>
                  <p>I typically respond within 24 hours. Sometimes faster.</p>
                </div>

                <div className={styles.infoCard}>
                  <h3>🎯 What I Work On</h3>
                  <ul>
                    <li>Next.js & React apps</li>
                    <li>Workflow automation</li>
                    <li>API integration</li>
                    <li>Website Builders like: Wordpress, Framer, Wix, Odoo etc</li>
                    {/* <li>Full-stack projects</li> Paused to focus on frontend mastery */}
                  </ul>
                </div>

                <div className={styles.infoCard}>
                  <h3>💼 Project Size</h3>
                  <p>
                    From small features to full-scale applications. Let&apos;s
                    talk about what you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
