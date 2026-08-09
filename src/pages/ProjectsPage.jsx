import React, { Suspense } from "react";
import SEO from "../components/SEO";
import StructuredData from "../components/Schema";
const Projects = React.lazy(() => import("./sections/Projects"));
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <SEO
        title="Projects — Ridlo Achmad Ghifary"
        description="Selected projects by Ridlo Achmad Ghifary — Full-Stack Web Developer. Case studies and links to live sites and source code."
        url={`https://v2.ridloghfry.web.id/projects`}
        keywords="projects, case studies, ridlo, full-stack developer"
      />

      <StructuredData
        projects={projects}
        website={{
          name: "Ridlo Portfolio",
          url: "https://v2.ridloghfry.web.id/",
        }}
      />

      <Suspense fallback={<div className="h-screen" />}>
        <Projects />
      </Suspense>
    </div>
  );
}
