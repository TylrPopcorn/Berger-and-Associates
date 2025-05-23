// https://ejs.co/
// https://ejs.co/#docs

//===== DEPENDENCIES:
// npm i morgan
// npm i express
// npm i nodemon
// npm init -y            <--PACKAGE.JSON
// npm i ejs                  <--HTML
// npm i sass --save-dev            <--SCSS
// npm install concurrently --save-dev      <--allows running multiple scripts at once

//====== HOW TO START APPLICATION: =======
//npm install
//npm run start

//http://localhost:3000/

//============VARIABLES============
const express = require("express");
const app = express();
const path = require("path");

const morgan = require("morgan");
//-------------
app.use(express.static("public")); //This makes sure any file inside public/ (like imgs/LOGO.png) is accessible directly via /imgs/LOGO.png.
app.use(morgan("tiny")); //use morgan middleware on every request
app.set("view engine", "ejs"); //Allow express to use EJS.
app.set("views", path.join(__dirname, "pages")); //taking current directory and joining it with 'views'
//-------------
//==============================ROUTES=====================================

//
app.get("/", (req, res) => {
  res.render("homepage.ejs");
});

//------UNKNOWN REQUESTS:
app.get("*", (req, res) => {
  // Redirect all unknown paths to the homepage ("/")
  res.redirect("/");
});

//----Listen to port:
app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
