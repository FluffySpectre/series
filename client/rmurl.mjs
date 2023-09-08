import fs from "fs";

const data = JSON.parse(fs.readFileSync("./src/assets/series/series.json"));

// remove url property
let newData = data.map((s) => {
  delete s.url;
  return s;
});

// replace cover url with the relative path
newData = newData.map((s) => {
  if (!s.cover || !s.cover.endsWith(".jpg")) {
    s.cover = "";
    return s;
  }

  let newCover = s.cover.substring(s.cover.indexOf("/cover/") + 7);
  s.cover = "assets/series/cover/" + newCover;
  return s;
});

// sort after title asc
newData.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});

fs.writeFileSync(
  "./src/assets/series/series.json",
  JSON.stringify(newData, null, 2)
);

console.log(newData);
