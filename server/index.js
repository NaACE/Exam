/* Preludes */
const database = require("./database");
const express = require("express");
const parser = express.json();
const cors = require("cors");
const app = express();
app.use(cors());


/* Routing */
app.get("/", (req, res) => { // Заглушка
  console.log("/data");
  res.send("wazza!");
});

app.post("/sign_in", express.json(), (req, res) => { // Пользователь хочет войти в систему
  database.sign_in(req.body, (err, r) => {
    if (err) {
      res.send({
        error: err,
      });
      
      return;
    }

    // !!! Не получаю данные из базы данных !!!

    //console.log("%j", res.body);
    res.send({ name: r });
  });
});


/* Server start */
app.listen(3030, () => {
  console.log("Я живой!!");
});