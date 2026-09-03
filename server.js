import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html"],
    maxAge: "1h",
  })
);

// One page, so unknown routes land on it — but only real navigations. A missing
// asset, or /_vercel/* in local dev, must 404 rather than get HTML back with a
// 200: handing index.html to a <script src> throws a syntax error in console.
const isNavigation = (req) =>
  req.method === "GET" &&
  !req.path.startsWith("/_vercel") &&
  !path.extname(req.path);

app.use((req, res) => {
  if (!isNavigation(req)) {
    return res.status(404).type("text/plain").send("Not found");
  }
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Anacrusis → http://localhost:${port}`);
});
