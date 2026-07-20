const fs = require("fs");
const files = [
  "src/app/artists/[id]/page.tsx",
  "src/app/artists/page.tsx",
  "src/app/booking/page.tsx",
  "src/app/page.tsx",
  "src/app/portfolio/adult/gallery/page.tsx",
  "src/app/portfolio/page.tsx"
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  
  if (!content.includes(`import { Header } from "@/components/Header";`)) {
    // Add import statement after the "use client"; directive if it exists, otherwise at top
    if (content.startsWith('"use client";')) {
      content = content.replace('"use client";', '"use client";\nimport { Header } from "@/components/Header";');
    } else {
      content = `import { Header } from "@/components/Header";\n` + content;
    }
  }
  
  const headerStart = content.indexOf("<header");
  const headerEnd = content.indexOf("</header>") + "</header>".length;
  
  if (headerStart !== -1 && headerEnd !== -1) {
    content = content.substring(0, headerStart) + "<Header />" + content.substring(headerEnd);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
