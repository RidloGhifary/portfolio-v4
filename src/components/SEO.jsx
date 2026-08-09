import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://v2.ridloghfry.web.id";
const SITE_NAME = "Ridlo Portfolio";

export default function SEO({
  title,
  description,
  image,
  url,
  keywords,
  author = "Ridlo Achmad Ghifary",
  type = "website",
  children,
}) {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Full-Stack Web Developer`;
  const metaUrl = url || SITE_URL;
  const metaImage = image || `${SITE_URL}/og-image.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta
        name="robots"
        content="index, follow, max-snippet:320, max-image-preview:large"
      />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {children}
    </Helmet>
  );
}
