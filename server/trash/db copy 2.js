const mysql = require("mysql");

module.exports = {
  registration: (user, callback) => {
    var db = new DB(
      'select *  from `users` where `username` = "' +
        user.email +
        '" and `password` = "' +
        user.pass +
        '"'
    );
    callback(db.run()); // db.run()
  },
  login: (user, callback) => {
    /// ! ДОБАВИТЬ ПРОВЕРКУ НА ПОВТОРЫ
    var db = new DB(
      "INSERT INTO users(id, username, password) VALUES( 2, '" +
        user.user_name +
        "', '" +
        user.password +
        "' )"
    );
    console.log(db.run());
    callback(db.run()); // db.run()
  },
};

class DB {
  constructor(select) {
    this.select = select;
    this.test();
  }

  test() {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "db",
    });
    var sql = "TRUNCATE TABLE users";

    connection.query(sql, function (err, results) {
      if (err) console.log(err);
      connection.end;
    });

    var sql1 = `INSERT INTO users(id, username, password) VALUES(1, 'test1', 'test1')`;

    connection.query(sql1, function (err, results) {
      if (err) console.log(err);
      connection.end;
    });
  }

  run() {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "db",
    });

    connection.connect((err) => {
      if (err) {
        console.error("Ошибка: " + err.message);
      } else {
        console.log(this.select);


        connection.query(
          "SELECT * FROM users",
          function (err, results, fields) {
            //console.log(err);
            //console.log(results); // собственно данные
            console.log(fields); // мета-данные полей
          }
        );

        /*connection.query(this.select, function (err, results) {
          console.log('ff');
          console.log(results);
          if (err) {
            console.log(err);
          } else {
            return results;
          }
        });*/
      }
      connection.end();
    });
  }
}
