import { IconCloud } from "../components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "figma",
  "reactnative",
  "nestjs",
  "mongodb",
  "redis",
  "graphql",
  "socketdotio",
  "python",
  "java",
  "redux",
  "wordpress",
  "firebase",
  "googlecloud",
  "docker",
  "kubernetes",
  "jenkins",
  "circleci",
  "openai",
  "tailwindcss",
  "puppeteer",
  "pandas",
];

export function TechIconCloud() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg   px-10 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
