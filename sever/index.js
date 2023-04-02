const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "project",
});

app.get("/house", (req, res) => {
    db.query("SELECT * FROM house", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});
app.post("/create", (req, res) => {
    const owner = req.body.owner;
    const housenumber = req.body.housenumber;
    const email = req.body.email ;
    const phone = req.body.phone;
    const status = req.body.status;
  
    db.query(
      "INSERT INTO house (housenumber,owner,email , phone, status) VALUES (?,?,?,?,?)",
      [housenumber,owner,email , phone, status],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  app.put("/update", (req, res) => {
    const id = req.body.id;
    const owner = req.body.owner;
    // const housenumber = req.body.housenumber;
    // const email = req.body.email ;
    // const phone = req.body.phone;
    // const status = req.body.status;
    db.query(
      "UPDATE house SET owner=? WHERE id = ?",
      [owner,id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});