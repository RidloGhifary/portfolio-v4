import React from "react";
import SEO from "../components/SEO";
import StructuredData from "../components/Schema";
import About from "./sections/About";

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About — Ridlo Achmad Ghifary"
        description="About Ridlo Achmad Ghifary — Full-Stack Web Developer specializing in React, TypeScript, and scalable web applications."
        url={`https://v2.ridloghfry.web.id/about`}
        keywords="Ridlo, About, Full-Stack Web Developer, React, TypeScript"
      />

      <StructuredData
        person={{
          name: "Ridlo Achmad Ghifary",
          url: "https://v2.ridloghfry.web.id/",
          jobTitle: "Full-Stack Web Developer",
          description:
            "Full-Stack Web Developer specializing in React, TypeScript, and scalable web applications.",
          sameAs: [],
        }}
        website={{
          name: "Ridlo Portfolio",
          url: "https://v2.ridloghfry.web.id/",
        }}
      />

      <About />
    </div>
  );
}
