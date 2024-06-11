import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Imad Atyat-Allah",
  initials: "IA",
  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/Casablanca",
  about: "Frontend Engineer",
  summary: `
I'm Imad Atyat-Allah, A Front-end React developer passionate about creating beautiful, user-friendly web applications.
  
My fascination with the world of web development began in high school, where I discovered a passion for creating fast and innovative web applications. Since then, I have dedicated myself to continually enhancing my skills and expertise in the field of web development.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/70093484?v=4",
  personalWebsiteUrl: "https://imadatyat.me",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/imadatyatalah",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imadatyat/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/imadatyat",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Self-taught",
      description: `
- Github: https://github.com/imadatyatalah
- Portfolio: https://imadatyat.me
`,
      start: "2020",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Obytes",
      link: "https://obytes.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "Apr 2022",
      end: "Present",
      description: `
- **Nawalic project**

  - Built Nawalic's landing page based on designs from Figma provided by our designer.
  - Connected the newsletter signup form to the backend.

- **Lineup project**

  - Managed the front-end team for Lineup project, ensuring a visually appealing and user-friendly web application.
  - Configured Stripe payments and Stripe Connect, enabling secure and hassle-free online transactions for customers.
  - Implemented complex features seamlessly into the site like authentication using OTP, User onboarding, and dashboards... ensuring smooth functionality.
  - Reviewed teammates' code on GitHub, identifying and resolving issues to keep the project on course.

- **Daratma project**

  - Built Daratma's new landing page based on designs from Figma provided by our designer.
  - Implemented Hygraph CMS Integration.
  - Connected the newsletter signup form to the backend.
`,
    },
    {
      company: "Portfolly",
      link: "https://portfolly.io",
      badges: ["Remote"],
      title: "Co-Founder",
      start: "Sep 2022",
      end: "Apr 2023",
      description: `
  - Implemented Multi-Tenancy.
  - Handled API Development using Next.js API routes, Prisma ORM, and Planetscale MySQL database.
  - Handled Front-end API Integration using react-query.
  - Integrated GitHub OAuth using next-auth.
`,
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Rest API",
    "GraphQL",
    "Prisma",
    "Drizzle",
    "Zustand",
  ],
  projects: [
    {
      title: "BlendSocials",
      techStack: ["Side Project", "TypeScript", "Next.js", "Vercel", "Prisma"],
      description: "A link-in-bio platform for growing creators.",
      link: {
        label: "blendsocials.com",
        href: "https://blendsocials.com",
      },
    },
    {
      title: "Quotes",
      techStack: ["Side Project", "TypeScript", "Next.js", "Vercel", "Zustand"],
      description:
        "Web application where you can store your quotes and share them with your friends.",
      link: {
        label: "quotes.imadatyat.me",
        href: "https://quotes.imadatyat.me",
      },
    },
    {
      title: "imadatyat.me",
      techStack: ["Side Project", "Next.js", "Vercel", "Prisma", "MDX"],
      description: "My personal website and blog.",
      link: {
        label: "imadatyat.me",
        href: "https://imadatyat.me/",
      },
    },
  ],
} as const;
