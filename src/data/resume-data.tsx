import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Imad Atyat-Allah",
  initials: "IA",
  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/Casablanca",
  about: "Frontend Engineer",
  summary: "Frontend Engineer",
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
      description: `All my stuff can be found at:
      \nGithub: https://github.com/imadatyatalah\nPortfolio: https://imadatyat.me`,
      start: "2020",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Portfolly",
      link: "https://portfolly.io",
      badges: ["Remote"],
      title: "Co-Founder",
      start: "Sep 2022",
      end: "Present",
      description: `- Setup multi-tenancy\n- Took care of all API stuff using Prisma and Planetscale`,
    },
    {
      company: "Obytes",
      link: "https://obytes.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "Apr 2022",
      end: "Present",
      description: `- Lineup project
      \n• Led the front-end team, making sure we built a great-looking and smooth-working web app.\n• Handled the setup of Stripe payments and Stripe Connect, so customers could easily and safely pay online.\n• Figured out how to add tricky new stuff to the site and made sure it all worked well.\n• Checked out my teammates' code on GitHub to help catch any issues and make sure everything was on track.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Prisma",
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
