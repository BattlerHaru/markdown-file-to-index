const fs = require("fs");

// file to get headers
const inputFile = "original.md";

// file generate with the index links
const outputFile = "result.md";

let currentLevel = 0;
const outputLines = [];

// counters of levels
// order level 1
//   order level 2
//     unordered level 3
let countLevel1 = 1;
let countLevel2 = 1;

const level1 = "## ";
const level2 = "### ";
const level3 = "#### ";

if (!inputFile.endsWith(".md")) {
  return;
}
try {
  const lines = fs.readFileSync(inputFile, "utf8").split("\n");
  console.log("⌛ Getting headers...");

  for (const line of lines) {
    let modifiedLine = line.trim();
    let outputLine = "";

    if (
      !modifiedLine.startsWith(level1) &&
      !modifiedLine.startsWith(level2) &&
      !modifiedLine.startsWith(level3) &&
      !modifiedLine.startsWith("--")
    ) {
      continue;
    }

    if (modifiedLine.endsWith(".")) {
      modifiedLine = modifiedLine.replace(".", "");
    }

    if (line.startsWith(level1)) {
      currentLevel = 1;
      modifiedLine = modifiedLine.replace(level1, "");
    } else if (line.startsWith(level2)) {
      currentLevel = 2;
      modifiedLine = modifiedLine.replace(level2, "");
    } else {
      currentLevel = 3;
      modifiedLine = modifiedLine.replace(level3, "");
    }

    outputLine = `[${modifiedLine}.](#${modifiedLine
      .toLowerCase()
      .replace("--", "")
      .replace(/ /g, "-")})`;

    let lineFormat = "";

    if (currentLevel == 1) {
      lineFormat = `${countLevel1}. ${outputLine}`;
      countLevel1++;
      countLevel2 = 1;
    } else if (currentLevel == 2) {
      lineFormat = `   ${countLevel2}. ${outputLine}`;
      countLevel2++;
    } else {
      lineFormat = `      ${"*"} ${outputLine}`;
    }

    outputLines.push(lineFormat);
  }
  fs.writeFileSync(outputFile, outputLines.join("\n"));

  console.log("✅ Success all headers convert.");
} catch (error) {
  console.log(Error);
}
