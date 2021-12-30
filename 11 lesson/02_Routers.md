# App.route

- Problem: we use 4 functions(or more..) with diffrent requests to **the same path**.

* we can make the code shorter and more readable and usefull using `App.route()` - changeable routes.

```js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/song", (req, res) => {
  res.send(`Get a random song`);
});

app.post("/song", (req, res) => {
  res.send(`Add a new song to the list`);
});

app.put("/song", (req, res) => {
  res.send(`Change song lyrics...`);
});

app.delete("/song", (req, res) => {
  res.send(`delete the song...`);
});

app.listen(PORT, () => console.log(`Listening in PORT ${PORT}...`));
```

- Solution - chainable routes:

```js
app
  .route("/song")
  .get((req, res) => {
    res.send(`Get a random song`);
  })
  .post((req, res) => {
    res.send(`Add a new song to the list`);
  })
  .put((req, res) => {
    res.send(`Change song lyrics...`);
  })
  .delete((req, res) => {
    res.send(`delete the song...`);
  });
```

# Express.Router

Express.Router() - is a `mini-app`

- When we want to separate the routes to diffrent file
  - app is getting bigger
  - we want to keep server.js as clean as possible.
  - We have diffrent paths in our app.
    (for example: users, store, admin...)

##### Example:

- store.js

```js
const express = require("express");

// Create new router for specific data:
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Store home page</h1>");
});

router.get("/about", (req, res) => {
  res.send("<h1>Store about page</h1>");
});

module.exports = router;
```

- server.js

```js
const express = require("express");
const songs = require("./songs");
const artists = require("./artists");

const app = express();
const PORT = 3000;

app.use("/songs", songs);
app.use("/artists", artists);

app.listen(PORT, () => console.log(`Listening in PORT ${PORT}...`));
```

- Access home page: `http://localhost:3000/store`
- Access about page: `http://localhost:3000/store/about`
