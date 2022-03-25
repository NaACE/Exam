const express = require("express");
const parser = express.json();
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  console.log('/data')
  res.send('wazza!')
});

app.post("/data", express.json(), (req, res) => {
  //console.log(req);
  res.send({ name: "Уйди противный" });
});

app.listen(3030);

/*app.listen(3030, () => {
  console.log("Я живой!!");
});*/