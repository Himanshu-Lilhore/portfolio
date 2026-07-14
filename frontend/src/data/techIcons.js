// Maps a technology name to its Simple Icons slug (and, when needed, a color
// override). Simple Icons are single-colour; by default we use the brand's own
// colour and mute it with a CSS filter in TechBadge. A handful of brands are
// near-black, which would vanish on the dark theme — those get a light override
// so they stay visible. Unlisted names render as text only.
const L = "cbd5e1"; // slate-300, for otherwise-invisible dark brand marks

export const techIcons = {
  JavaScript: { slug: "javascript" },
  TypeScript: { slug: "typescript" },
  Python: { slug: "python" },
  Java: { slug: "openjdk" },
  "C/C++": { slug: "cplusplus" },
  "Next.js": { slug: "nextdotjs", color: L },
  "React.js": { slug: "react" },
  React: { slug: "react" },
  "Node.js": { slug: "nodedotjs" },
  Node: { slug: "nodedotjs" },
  "Express.js": { slug: "express", color: L },
  Django: { slug: "django" },
  "Socket.IO": { slug: "socketdotio", color: L },
  Tailwind: { slug: "tailwindcss" },
  Selenium: { slug: "selenium" },
  HTML5: { slug: "html5" },
  HTML: { slug: "html5" },
  CSS: { slug: "css3" },
  MongoDB: { slug: "mongodb" },
  MySQL: { slug: "mysql" },
  OracleDB: { slug: "oracle" },
  Vercel: { slug: "vercel", color: L },
  "GitHub Pages": { slug: "githubpages", color: L },
  "GitHub Actions": { slug: "githubactions" },
  "Git / GitHub": { slug: "git" },
  Jira: { slug: "jira" },
  Redis: { slug: "redis" },
  WebRTC: { slug: "webrtc", color: L },
  "YouTube API": { slug: "youtube" },
};
