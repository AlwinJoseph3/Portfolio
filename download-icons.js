import fs from "fs";
import https from "https";

const icons = [
  "react",
  "tailwindcss",
  "threedotjs/white",
  "cplusplus",
  "c",
  "python",
  "typescript",
  "html5",
  "nodedotjs",
  "firebase",
  "netlify",
  "yolo",
  "google",
  "flutter",
  "git",
  "github/white",
  "postman",
  "figma",
  "blender",
];

fs.mkdirSync("./public/icons", { recursive: true });

icons.forEach((icon) => {
  const url = `https://cdn.simpleicons.org/${icon}`;
  const filename = `./public/icons/${icon.replace("/", "_")}.svg`;
  https
    .get(url, (res) => {
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
      });
    })
    .on("error", (err) => {
      console.error(`Error downloading ${icon}:`, err.message);
    });
});
