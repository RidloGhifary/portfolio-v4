import React from "react";
import SEO from "../components/SEO";

export default function ResumePage() {
  return (
    <div>
      <SEO
        title="Resume — Ridlo Achmad Ghifary"
        description="Resume of Ridlo Achmad Ghifary — Full-Stack Web Developer. Download CV and view skills, experience, and contact information."
        url={`https://v2.ridloghfry.web.id/resume`}
        keywords="resume, CV, ridlo, full stack developer"
      />

      <main className="w-full px-4 sm:px-8 md:px-12 lg:px-24 min-h-screen text-text-primary font-sans bg-brand-bg">
        <section className="py-24">
          <h1 className="text-4xl font-black">Resume</h1>
          <p className="mt-4 text-text-secondary">Download and view my CV.</p>
        </section>
      </main>
    </div>
  );
}
