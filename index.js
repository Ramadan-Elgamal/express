const express = require("express");
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3270965881.
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use((req, res, next) => {
    console.log("course")
    next()
})
app.get("/courses/api" , (req, res) => {
    res.send("first course")
})
app.get("/courses/js" , (req, res) => {
    res.send("second course")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});