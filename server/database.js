const mysql = require('mysql');

module.exports = {
  sign_in: (user, callback) => { // Войти
    //var database = new Database("select * from `users` where `username` = '" + user.user_name + "' and `password` = '" + user.password + "';");
    var database = new Database("SELECT id, username, password FROM `users`");
    callback(database.accessing_the_database());
  },
  sign_up: (user, callback) => { // Зарегистрироваться ! ДОБАВИТЬ ПРОВЕРКУ НА ПОВТОРЫ
    //var db = new Database("INSERT INTO users(id, username, password) VALUES( 2, '" + user.user_name + "', '" + user.password + "' )");
    //callback(database.accessing_the_database());
  }
}

class Database {
  constructor(select) {
    this.select = select;
  }

  reset_table_and_recreate() { // Сбросить таблицу и создать заново 
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'db'
    });


    // Сброс таблицы    
    var sql = 'TRUNCATE TABLE users';
    connection.query(sql, function (err, results) {
      if (err) console.log(err);
      connection.end;
    });


    // Создание таблицы
    var sql1 = `INSERT INTO users(id, username, password) VALUES(1, 'test1', 'test1')`;
    connection.query(sql1, function (err, results) {
      if (err) console.log(err);
      connection.end;
    });
  }

  accessing_the_database() { // Обращение к базе данных 
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'db'
    });

    connection.connect((err) => {
      if (err) {
        console.error('Ошибка: ' + err.message);
      }

      connection.query(this.select, function (err, results) {
        if (err) {
          console.error(err);
        } else {
          console.log(results);
          return results;
        }
      });
      connection.end();
    });
  }
}