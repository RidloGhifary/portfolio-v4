import { lazy, Suspense, useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TransitionPortal from "../components/common/TransitionPortal";
import Hero from "./sections/Hero";
import SEO from "../components/SEO";
import StructuredData from "../components/Schema";
import { projects } from "../data/projects";

const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Skills = lazy(() => import("./sections/Skills"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));

const Home = ({ isTransitioning, finalizeTransition }) => {
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);

  // Optimized scroll handler with minimal DOM operations
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Cancel any pending scroll
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current);
    }

    // Double RAF for better performance
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const offset = 80;
        const top =
          element.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      });
    });
  }, []);

  // Handle navigation from other pages
  useEffect(() => {
    const scrollToId = location.state?.scrollToId;

    if (!scrollToId) return;

    // Immediate state cleanup
    if (window.history.replaceState) {
      window.history.replaceState({}, document.title);
    }

    // Defer scroll with minimal delay
    const timerId = setTimeout(() => {
      scrollToSection(scrollToId);
    }, 100);

    return () => {
      clearTimeout(timerId);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [location.state?.scrollToId, scrollToSection]);

  // Cleanup on unmount
  useEffect(() => {
    // Pengaman: Kalau dalam 2 detik transisi belum kelar juga, paksa matikan
    if (isTransitioning) {
      const safetyTimer = setTimeout(() => {
        finalizeTransition(); // Paksa panggil fungsi onComplete
      }, 100);

      return () => clearTimeout(safetyTimer);
    }
  }, [isTransitioning, finalizeTransition]);

  return (
    <div className="relative">
      <SEO
        title="Home"
        description={`Ridlo Achmad Ghifary — Full-Stack Web Developer building modern web apps with React, TypeScript, and Node.js. Explore projects, services, and contact information.`}
        keywords={`Ridlo Achmad Ghifary, Full Stack Web Developer, React, TypeScript, Node.js`}
        url={`https://v2.ridloghfry.web.id/`}
      />

      <StructuredData
        person={{
          name: "Ridlo Achmad Ghifary",
          url: "https://v2.ridloghfry.web.id/",
          jobTitle: "Full-Stack Web Developer",
          description:
            "Ridlo Achmad Ghifary — Full-Stack Web Developer building modern web apps with React, TypeScript, and Node.js.",
          sameAs: [],
        }}
        website={{
          name: "Ridlo Portfolio",
          url: "https://v2.ridloghfry.web.id/",
          description:
            "Portfolio website of Ridlo Achmad Ghifary, Full-Stack Web Developer.",
        }}
        projects={projects}
      />
      <TransitionPortal
        isActive={isTransitioning}
        onComplete={finalizeTransition}
      />

      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
