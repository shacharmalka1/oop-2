const router = require("express").Router();
const fs = require("fs");
const usersPath = `C:/dev/cyber4s/oop-2/guitarShop/users`;
const collectionPath = "C:/dev/cyber4s/oop-2/guitarShop/guitarCollection";

router.post("/signup/:username", (req, res) => {
  //sign up
  const userName = req.params.username;
  if (!fs.existsSync(`${usersPath}/${userName}`)) {
    fs.mkdirSync(`${usersPath}/${userName}`); //create new directory by the username
    res.send("You signed up, now you can login");
  } else {
    res.send("This username is already taken try another one....");
  }
});

router.get("/signin/:username", (req, res) => {
  //sign in
  const userName = req.params.username;
  if (fs.existsSync(`${usersPath}/${userName}`)) res.send(true);
  else res.send(false);
});

router.get("/showCollection", function (req, res) {
  const guitarsArray = fs.readdirSync(collectionPath);
  const guitarObjArray = [];
  for (let filename of guitarsArray) {
    const guitarObj = JSON.parse(
      fs.readFileSync(`${collectionPath}/${filename}`)
    );
    guitarObjArray.push(guitarObj);
  }
  return res.send(guitarObjArray);
});

router.post("/buyGuitar/:username", (req, res) => {
  const id = req.body.id;
  const userName = req.params.username;
  const userPath = `${usersPath}/${userName}`;
  const guitarObj = JSON.parse(
    fs.readFileSync(`${collectionPath}/Guitar${id}.json`)
  );
  fs.writeFileSync(`${userPath}/Guitar${id}.json`, JSON.stringify(guitarObj));
  res.send("bought");
});

module.exports = router;
