const express = require("express");
const app =  express();
const test = require("./Router/test")

app.use("/api", test);

const port = 4400;
app.listen(port, () => console.log(`출력 ${[port]}`));