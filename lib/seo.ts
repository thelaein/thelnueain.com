export const siteConfig = {
  name: "Thel Nu",
  title: "Thel Nu — UI/UX Designer",
  description:
    "UI/UX Designer crafting intuitive mobile, web and product experiences through research, systems thinking, and thoughtful visual design.",
  url: "https://thelnueain.com",
  ogImage: "https://thelnueain.com/opengraph-image",
  keywords: [
    "Thel Nu",
    "UI/UX Designer",
    "Product Designer",
    "UX Research",
    "Interface Design",
    "Mobile App Design",
    "Web App Design",
    "Dashboard Design",
    "Design Systems",
    "Myanmar Designer",
  ],
  author: "Thel Nu",
  creator: "Thel Nu",
  email: "thelnuaein5450@gmail.com",
  links: {
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
