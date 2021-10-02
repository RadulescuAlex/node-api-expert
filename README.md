# node-api

Node JS CRUD API example

- [x] store info in [JSON file](data/teams.json)
- [x] store info in DB (MYSQL)

## Install

```sh
git clone https://github.com/nmatei/node-api.git
cd node-api
npm install
```

## JS Usage

```sh
npm run devstart
```

### JSON file as storage

Team members are stored inside [data/teams.json](data/teams.json)

```js
// GET teams-json
fetch("http://localhost:3000/teams-json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
});

// POST teams-json/create
fetch("http://localhost:3000/teams-json/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    promotion: "WON3",
    members: "Your Name",
    name: "CV",
    url: "https://github.com/nmatei/teams-networking"
  })
});

// DELETE teams-json/delete
fetch("http://localhost:3000/teams-json/delete", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id: "fedcba1610309909431" })
});

// PUT teams-json/update
fetch("http://localhost:3000/teams-json/update", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: "fedcba1610310163146",
    promotion: "WON3",
    members: "UpdatedName",
    name: "Name",
    url: "https://github.com/nmatei/teams-networking"
  })
});
```

### DB (MySQL) as storage

Team members are stored mysql

- configure user & pass for mysql connection [routes/teams-db.js](routes/teams-db.js)
- create a database named **teams**
- run [http://localhost:3000/teams/install](http://localhost:3000/teams/install)
- now you can any other CRUD operations (the same as for json but change url **"teams-json" -> "teams"**)
