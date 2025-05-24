//REMOVES UNECESSARY FILES FROM CSS FOLDER

//variables
const fs = require("fs");
const path = require("path");

const scssDir = "scss"; // Source SCSS folder
const cssDir = "public/css"; // Compiled CSS folder
//-----------

// Get all SCSS filenames (without extensions)
const scssFiles = fs
  .readdirSync(scssDir)
  .filter((file) => file.endsWith(".scss"))
  .map((file) => path.basename(file, ".scss") + ".css");

// Get all CSS files in public/css
const cssFiles = fs.readdirSync(cssDir).filter((file) => file.endsWith(".css"));

// Remove unused CSS files
cssFiles.forEach((file) => {
  if (!scssFiles.includes(file)) {
    fs.unlinkSync(path.join(cssDir, file));
    console.log(`Deleted: ${file}`);
  }
});
