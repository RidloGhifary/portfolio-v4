export const projects = [
  {
    id: "01",
    title: "DRI - Corporate Website",
    category: "DEPLOYMENT",
    filterCategory: "web",
    image: "/projects/project-dri.png",
    description:
      "I was responsible for deploying this website on a Linux server using Docker, Jenkins, and GitHub CI/CD to ensure automated builds, reliable containerized delivery, and smooth production updates.",
    tech: ["Docker", "Jenkins", "CI/CD"],
    client: "PT. Daya Rekadigital Indonesia",
    year: 2026,
    challenge:
      "Deploying a corporate website to a Linux production environment while ensuring automated builds, containerized consistency, and reliable release workflows through Docker, Jenkins, and GitHub CI/CD without disrupting site availability.",
    featured: false,
    slug: "dri-website",
    links: {
      live: "https://dri.co.id/",
      github: "-",
    },
  },
  {
    id: "02",
    title: "Betty - POS",
    category: "Full-Stack Development",
    filterCategory: "web",
    image: "/projects/project-betty.png",
    description:
      "I built both the frontend and backend for this POS system, with a strong focus on backend architecture and performance. The platform includes around 50 API endpoints designed to stay under one second response time, while also managing CI/CD, deployment, and build monitoring for the server and its services.",
    tech: ["Next.JS", "Express", "MySQL", "Redis", "Docker", "Jenkins"],
    client: "PT. Daya Rekadigital Indonesia",
    year: 2025,
    challenge:
      "The main challenge was building a complex mathematical calculation engine for detailed reports and POS transaction logic, including pricing, discounts, totals, taxes, and itemized summaries, while keeping the system accurate, efficient, and reliable for day-to-day operations.",
    featured: true,
    slug: "betty-pos",
    links: {
      live: "https://betty.id/",
      github: "-",
    },
  },
  {
    id: "03",
    title: "SmartPoleIN - Smart City Solution",
    category: "FREELANCE",
    filterCategory: "fr",
    image: "/projects/project-smartpolein.png",
    description:
      "SmartPoleIN is a smart city solution that integrates IoT technology into urban infrastructure, providing real-time data and connectivity to enhance public services, improve safety, and optimize resource management in cities.",
    tech: ["Next.JS", "Tailwind CSS", "Docker"],
    client: "Freelance",
    year: 2026,
    challenge:
      "Developing a user-friendly smart city solution that integrates IoT technology into urban infrastructure, providing real-time data and connectivity to enhance public services, improve safety, and optimize resource management in cities.",
    featured: false,
    slug: "smartpolein",
    links: {
      live: "https://smartpolein.co.id/",
      github: "-",
    },
  },

  {
    id: "04",
    title: "PinoteJS",
    category: "SELF PROJECT",
    filterCategory: "npm",
    image: "/projects/project-pinotejs.png",
    description:
      "Figma-style feedback for any website. Pinote lets designers, developers, QA teams, and clients leave comments directly on the UI instead of sending screenshots through chat.",
    tech: ["Typescript", "Vite", "NPM"],
    client: "Self Project",
    year: 2026,
    challenge:
      "Built for modern product teams. A focused feedback layer for teams that care about product quality, implementation context, and developer workflow.",
    featured: false,
    slug: "pinotejs",
    links: {
      live: "https://pinotejs.ridlolabs.net/",
      github: "https://github.com/RidloGhifary/pinotejs",
    },
  },
  {
    id: "05",
    title: "View API",
    category: "SELF PROJECT",
    filterCategory: "npm",
    image: "/projects/project-view-api.png",
    description:
      "A local mock server with a live editor—no backend, no redeploy, no save button. Build frontends without the wait.",
    tech: ["Express", "Node.js", "Chokidar", "NPM"],
    client: "Self Project",
    year: 2026,
    challenge:
      "Creating a local mock server with a live editor that allows frontend development without the need for backend setup, redeployment, or manual saving, while ensuring real-time updates and seamless integration with existing workflows.",
    featured: false,
    slug: "view-api",
    links: {
      live: "https://ridloghifary.github.io/view-api/",
      github: "https://github.com/RidloGhifary/view-api",
    },
  },
  {
    id: "06",
    title: "NikahKu - Wedding Service",
    category: "FREELANCE",
    filterCategory: "fr",
    image: "/projects/project-nikahku.png",
    description:
      "NikahKu is a wedding service website that provides comprehensive information and resources for couples planning their wedding, including vendor listings, budgeting tools, and planning checklists to help streamline the wedding planning process.",
    tech: ["Next.JS", "Tailwind CSS", "Docker"],
    client: "Freelance",
    year: 2026,
    challenge:
      "Developing a user-friendly wedding service website that offers comprehensive information and resources for couples, including vendor listings, budgeting tools, and planning checklists, while ensuring seamless navigation and an engaging user experience.",
    featured: false,
    slug: "nikahku",
    links: {
      live: "https://nikahku.ridlolabs.net/",
      github: "-",
    },
  },
  {
    id: "07",
    title: "Tree Structure Generator",
    category: "SELF PROJECT",
    filterCategory: "ext",
    image: "/projects/project-tree.png",
    description:
      "File Tree Generator is a Visual Studio Code extension that allows users to generate a visual file tree of their workspace with just one click. This extension provides a quick and easy way to view the structure of your project and even includes options to show file sizes.",
    tech: ["Javascript", "VS Code API", "Microsoft Marketplace"],
    client: "Self Project",
    year: 2025,
    challenge:
      "A VS Code extension that generates a file tree for your workspace with customizable options for ignored files and sizes.",
    featured: false,
    slug: "tree-structure",
    links: {
      live: "https://marketplace.visualstudio.com/items?itemName=Ridloachmadghifary.tree-structure-generator",
      github: "https://github.com/RidloGhifary/file-tree-generator",
    },
  },
  {
    id: "08",
    title: "How Many Lines of Codes",
    category: "SELF PROJECT",
    filterCategory: "ext",
    image: "/projects/project-lines.png",
    description:
      "A simple VS Code extension that counts how many non-empty lines of source code exist in your currently opened workspace and displays the total in the Status Bar.",
    tech: ["Typescript", "VS Code API", "Microsoft Marketplace"],
    client: "Self Project",
    year: 2026,
    challenge:
      "A simple VS Code extension that counts how many non-empty lines of source code exist in your currently opened workspace and displays the total in the Status Bar.",
    featured: false,
    slug: "line-of-code",
    links: {
      live: "https://marketplace.visualstudio.com/items?itemName=Ridloachmadghifary.how-many-lines-of-code",
      github: "https://github.com/RidloGhifary/how-many-lines-of-code",
    },
  },
];
