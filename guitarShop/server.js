const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const usersRouter = require("./router/usersRouter");
const adminRouter = require("./router/adminRouter");

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);

app.use("/admin", adminRouter);

app.get("/", function (req, res) {
  res.send("byeeeeeeeeeee");
});

app.listen(port, function () {
  console.log("hi im running");
});
