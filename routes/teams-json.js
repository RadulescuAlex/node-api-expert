var express = require("express");
var router = express.Router();
var fs = require("fs");

const DATA_PATH = "data/teams.json";

/**
 * IMPORTANT: add content type headers to be able to use req.body.*
  headers: {"Content-Type": "application/json"},
 */

/**
 *
 */
router.get("/", function (req, res, next) {
  const content = fs.readFileSync(DATA_PATH);
  const teams = JSON.parse(content);
  res.json(teams);
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const promotion = req.body.promotion;
  const members = req.body.members;
  const name = req.body.name;
  const url = req.body.url;

  let content = fs.readFileSync(DATA_PATH);
  const teams = JSON.parse(content);

  const id = Math.random().toString(36).substring(7) + new Date().getTime();

  teams.push({
    id,
    promotion,
    members,
    name,
    url
  });

  content = JSON.stringify(teams, null, 2);
  fs.writeFileSync(DATA_PATH, content);

  res.json({ success: true, id });
});

/**
 *
 */
router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  let content = fs.readFileSync(DATA_PATH);
  const teams = JSON.parse(content);

  const remainingTeams = teams.filter(function (team) {
    return team.id != id;
  });

  content = JSON.stringify(remainingTeams, null, 2);
  fs.writeFileSync(DATA_PATH, content);

  res.json({ success: true });
});

/**
 *
 */
router.put("/update", function (req, res, next) {
  const id = req.body.id;
  const promotion = req.body.promotion;
  const members = req.body.members;
  const name = req.body.name;
  const url = req.body.url;

  let content = fs.readFileSync(DATA_PATH);
  const teams = JSON.parse(content);

  const contact = teams.find(function (team) {
    return team.id == id;
  });
  if (contact) {
    contact.promotion = promotion;
    contact.members = members;
    contact.name = name;
    contact.url = url;
  }

  content = JSON.stringify(teams, null, 2);
  fs.writeFileSync(DATA_PATH, content);

  res.json({ success: true });
});

module.exports = router;
