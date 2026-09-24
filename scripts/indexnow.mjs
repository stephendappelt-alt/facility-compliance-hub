// Submits every public URL to IndexNow (Bing, Yandex, Seznam, Naver share it).
// Run after a deploy goes live:  npm run indexnow
// Optional: pass specific paths to submit only those, e.g.
//   npm run indexnow -- /healthcare /generators/nfpa-110-emergency-generator-compliance-guide
import fs from "fs";
import path from "path";

const HOST = "facilitycompliancehub.org";
const KEY = "8be43911501ccc09002acbbc4d576c40"; // must match public/<KEY>.txt

function allPaths() {
  const dir = path.join(process.cwd(), "content", "articles");
  const paths = ["/", "/about", "/healthcare"];
  for (const vertical of fs.readdirSync(dir)) {
    const files = fs.readdirSync(path.join(dir, vertical)).filter((f) => f.endsWith(".mdx"));
    if (files.length) paths.push(`/${vertical}`);
    for (const f of files) {
      const src = fs.readFileSync(path.join(dir, vertical, f), "utf-8");
      if (/^draft:\s*true/m.test(src)) continue;
      paths.push(`/${vertical}/${f.replace(/\.mdx$/, "")}`);
    }
  }
  return paths;
}

const paths = process.argv.slice(2).length ? process.argv.slice(2) : allPaths();
const urlList = paths.map((p) => `https://${HOST}${p}`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status >= 400) console.log(await res.text());
