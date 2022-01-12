const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "05130202Ga",
  database: "bookmark",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const email = req.body.email;
  const sqlGet = "INSERT INTO emails (id, email) VALUES (DEFAULT, ?)";

  db.query(sqlGet, [email], (err, result) => {});
});

app.post("/api/signup", (req, res) => {
  const email = req.body.email;
  const nome = req.body.nome;
  const sobrenome = req.body.sobrenome;
  const senha = req.body.senha;

  const checkEmail = "SELECT * FROM users WHERE email = ?";
  db.query(checkEmail, [email], (err, result) => {
    if (result[0] != undefined) {
      res.send("-1");
    } else {
      const sqlGet =
        "INSERT INTO users (id, nome, sobrenome, email, senha) VALUES (DEFAULT, ?, ?, ?, ?)";

      db.query(sqlGet, [nome, sobrenome, email, senha], (err, result) => {});
      res.send("1");
    }
  });
});

app.post("/api/get", (req, res) => {
  const emailLogin = req.body.email;
  const senhaLogin = req.body.senha;
  const sqlInsert = "SELECT * FROM users WHERE email = ? AND senha = ?";

  db.query(sqlInsert, [emailLogin, senhaLogin], (err, result) => {
    res.send(result);
  });
});

app.listen(5000, () => console.log(`Server started on port ${5000}.`));
