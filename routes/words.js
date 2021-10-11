var express = require("express");
var router = express.Router();
var fs = require("fs");
var mysql = require("mysql");

const DATA_PATH = "data/structure.sql";

/**
 * IMPORTANT: add content type headers to be able to use req.body.*
  headers: {"Content-Type": "application/json"},
 */

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "expert_info"
});

/**
 * run this before first USAGE to create words TABLE
 */
router.get("/install", function (req, res, next) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = fs.readFileSync(DATA_PATH, "utf8");
    connection.query(sql, function (err, results) {
      if (err) {
        console.error("Install failed", err);
      }
      connection.release();
      res.redirect("/");
    });
  });
});

/**
 *
 */
router.get("/", function (req, res, next) {
  const domain = req.query.domain;
  const query = req.query.query;
  console.log("Search for domain: ", domain);
  console.log("Search for query: ", query);
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `SELECT 
        id,
        word, 
        explication 
      FROM words 
      WHERE 
        domain=? AND 
        (word LIKE ? OR explication LIKE ?)`;
    connection.query(sql,[domain, `%${query}%`, `%${query}%`], function (err, results) {
      if (err) {
        console.error(err);
        connection.release();
        res.send(err);
        return;
      }
      connection.release();
      res.json(results);
    });
  });
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const domain = req.body.domain;
  const word = req.body.word;
  const explication = req.body.explication;
  

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `INSERT INTO words (id, domain, word, explication) VALUES (NULL, ?, ?, ?);`;
    connection.query(sql, [domain, word, explication], function (err, results) {
      if (err) throw err;
      const id = results.insertId;
      connection.release();
      res.json({
        success: true,
        id
      });
    });
  });
});

/**
 *
 */
 router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `DELETE FROM words WHERE id=?`;
    connection.query(sql, [id], function (err, results) {
      if (err) throw err;
      connection.release();
      res.json({ success: true });
    });
  });
});

/**
 *
 */
router.put("/update", function (req, res, next) {
  const id = req.body.id;
  const domain = req.body.domain;
  const word = req.body.word;
  const explication = req.body.explication;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `UPDATE words SET word=?, explication=? WHERE id=?`;
    connection.query(sql, [domain, word, explication, id], function (err, results) {
      if (err) throw err;
      connection.release();
      res.json({ success: true });
    });
  });
});

module.exports = router;
