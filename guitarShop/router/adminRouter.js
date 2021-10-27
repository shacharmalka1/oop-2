const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const guitarCollections = `C:/dev/cyber4s/oop-2/guitarShop/guitarCollection`;

router.post("/addGuitar", (req, res) => {
  const guitarObj = req.body.guitar;
  const userFiles = fs.readdirSync(guitarCollections);
  fs.writeFileSync(
    `${guitarCollections}/Guitar${userFiles.length + 1}.json`,
    JSON.stringify(guitarObj)
  );
  return res.send(true);
});

module.exports = router;
