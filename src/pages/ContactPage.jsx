import React from "react";
import SEO from "../components/SEO";
import StructuredData from "../components/Schema";
import Contact from "./sections/Contact";

export default function ContactPage() {
  return (
    <div>
      <SEO
        title="Contact — Ridlo Achmad Ghifary"
        description="Contact Ridlo Achmad Ghifary for freelance or full-time Full-Stack Web Development work. Reach out to discuss projects or collaborations."
        url={`https://v2.ridloghfry.web.id/contact`}
        keywords="contact, hire ridlo, freelance web developer"
      />

      <StructuredData
        person={{
          name: "Ridlo Achmad Ghifary",
          url: "https://v2.ridloghfry.web.id/",
          jobTitle: "Full-Stack Web Developer",
        }}
        website={{
          name: "Ridlo Portfolio",
          url: "https://v2.ridloghfry.web.id/",
        }}
      />

      <Contact />
    </div>
  );
}
