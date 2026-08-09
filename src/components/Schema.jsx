import React from "react";

const SITE_URL = "https://v2.ridloghfry.web.id";

export function StructuredData({
  person,
  website,
  projects = [],
  breadcrumb = [],
}) {
  const graph = [];

  // Person
  graph.push({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person?.name || "Ridlo Achmad Ghifary",
    url: person?.url || SITE_URL,
    jobTitle: person?.jobTitle || "Full-Stack Web Developer",
    description: person?.description,
    sameAs: person?.sameAs || [],
  });

  // Website
  graph.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: website?.name || "Ridlo Portfolio",
    url: website?.url || SITE_URL,
    description: website?.description,
  });

  // Projects as CreativeWork items
  if (projects.length) {
    const items = projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      url: p.url || `${SITE_URL}/project/${p.slug}`,
      image: p.image ? `${SITE_URL}${p.image}` : undefined,
      keywords: p.tech?.join(", "),
      datePublished: p.year ? `${p.year}` : undefined,
    }));

    graph.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: it,
      })),
    });
  }

  // Breadcrumb
  if (breadcrumb.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  const jsonLd = graph.length > 1 ? graph : graph[0];

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd, null, 2)}
    </script>
  );
}

export default StructuredData;
