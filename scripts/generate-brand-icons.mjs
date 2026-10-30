import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// All browser and home-screen variants derive from this single vector master.
const source = await readFile(new URL("../public/icon.svg", import.meta.url));

await Promise.all([
  writeFile(new URL("../src/app/icon.svg", import.meta.url), source),
  writeFile(new URL("../public/favicon.svg", import.meta.url), source),
  sharp(source)
    .resize(180, 180)
    .flatten({ background: "#171717" })
    .png()
    .toFile(fileURLToPath(new URL("../public/apple-touch-icon.png", import.meta.url))),
]);

const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map((size) => sharp(source).resize(size, size).png().toBuffer()),
);

// ICO directory entries point to PNG-encoded images, preserving transparency.
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;

for (let index = 0; index < sizes.length; index++) {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(images[index].length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
}

await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([directory, ...images]),
);

console.log("Generated SVG aliases, 16/32/48px favicon.ico, and 180px Apple touch icon from public/icon.svg.");
