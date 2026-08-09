import fs from "fs";
import path from "path";

const PROJECTS_FILE = path.resolve(process.cwd(), "src/data/projects.js");
const OUTPUT_FILE = path.resolve(process.cwd(), "public/sitemap.xml");
const BASE_URL = process.env.SITE_URL || "https://v2.ridloghfry.web.id";

function loadProjects() {
  try {
    const content = fs.readFileSync(PROJECTS_FILE, "utf-8");
    // naive extraction: evaluate file safely by replacing export and using dynamic import
    // We'll create a temporary module to import
    const tmpFile = path.resolve(
      process.cwd(),
      "node_modules/.sitemap_temp_projects.mjs",
    );
    const wrapped = content.replace(
      /export\s+const\s+projects\s*=\s*/,
      "const projects = ",
    );
    fs.mkdirSync(path.dirname(tmpFile), { recursive: true });
    fs.writeFileSync(tmpFile, wrapped + "\nexport default projects;");
    const projects = awaitImport(tmpFile);
    try {
      fs.unlinkSync(tmpFile);
    } catch (e) {}
    return projects;
  } catch (err) {
    console.error("Failed to load projects file", err);
    return [];
  }
}

function awaitImport(file) {
  const fileUrl = "file://" + file;
  return import(fileUrl)
    .then((m) => m.default || m.projects)
    .catch((err) => {
      console.error(err);
      return [];
    });
}

function buildUrlEntry(loc, opts = {}) {
  const lastmod = opts.lastmod || new Date().toISOString().split("T")[0];
  const changefreq = opts.changefreq || "monthly";
  const priority = opts.priority || "0.8";
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n    <lastmod>${lastmod}</lastmod>\n  </url>\n`;
}

async function main() {
  const projects = await loadProjects();

  const staticRoutes = ["/", "/projects", "/about", "/contact", "/resume"];

  let xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // static
  for (const r of staticRoutes) {
    xml += buildUrlEntry(`${BASE_URL}${r === "/" ? "/" : r}`, {
      changefreq: "weekly",
      priority: r === "/" ? "1.0" : "0.7",
    });
  }

  // projects
  for (const p of projects) {
    const slug = p.slug || p.id || "";
    const loc = `${BASE_URL}/project/${slug}`;
    xml += buildUrlEntry(loc, {
      changefreq: "monthly",
      priority: "0.8",
      lastmod: p.lastmod || (p.year ? `${p.year}-01-01` : undefined),
    });
  }

  xml += "</urlset>\n";

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, xml, "utf-8");
  console.log("Sitemap written to", OUTPUT_FILE);
}

if (import.meta.url.endsWith(".js") || typeof require !== "undefined") {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
