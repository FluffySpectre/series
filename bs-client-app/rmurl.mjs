import fs from "fs";

const data = JSON.parse(fs.readFileSync("./src/assets/series/series.json"));

const newData = data.map((s) => {
  delete s.url;
  return s;
});

fs.writeFileSync(
  "./src/assets/series/series.json",
  JSON.stringify(newData, null, 2)
);

console.log(newData);
