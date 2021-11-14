const express = require("express");
const connect = require("./config/db");
const jobController = require("./controller/jobdata.controller")
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/job", jobController);
app.listen(3000, async () => {
    await connect();
    console.log("Listening on port 3000");
});