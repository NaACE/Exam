//var mysql = require('mysql');
const mysql = null;
//const express = require('express');
//const mysql = require('mysql2');

const Request = {
  signin: function (email, pass) {
    console.log(email + " == " + pass);
    const user = {
      email: email,
      pass: pass,
    };

    fetch("http://localhost:3030/sign_in", { // data
      method: "POST", // POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //var db = new DB('select *  from `users` where `username` = "' + email + '" and `password` = "' + pass + '"');
    //db.run();
  },
  signup: function (email, pass, repass) {
    console.log(email + " == " + pass + " == " + repass);
    //var db = new DB("INSERT INTO users(id, username, password) VALUES( 2, '" + email + "', '" + user.password + "' )");
    //console.log(db.run());
    //callback(db.run()); // db.run()
  },
  reset: function (email) {
    console.log(email);
  },
};

export default Request;
