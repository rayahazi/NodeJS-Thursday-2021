# Static files

To serve static files(Html, Css, JavaScript, Images etc...) - use the express.static() middleware function:

- Create folder in our app: `public`.
- in server.js

> Important note: if will recognize only `index.html` file name:

```js
const express = require("express");

const app = express();
const PORT = 3000;

// app.use() - static files: HTML, CSS, JavaScript etc..
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Listening in PORT ${PORT}...`));
```

### Use files with other names than `index`:

- Create `user.html` inside `public` folder:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      h2 {
        background-color: darkslateblue;
      }
    </style>
  </head>
  <body>
    <div id="res"></div>

    <script>
      let userName = prompt("Enter your username: ");
      document.getElementById(
        "res"
      ).innerHTML = `<h2>Your name is: ${userName}</h2>`;
    </script>
  </body>
</html>
```

- Access the file `http://localhost:3000/user.html`
  note: we do not use the path of the folder. (it will be defined in server.js)

## Use diffrent path for files in the `public` folder:

- in server.js
  Add path of `users` to the `public` folder

```js
const express = require("express");

const app = express();
const PORT = 3000;

// app.use() - static files: HTML, CSS, JavaScript etc..
app.use("/users", express.static("public"));

app.listen(PORT, () => console.log(`Listening in PORT ${PORT}...`));
```

- Access index.html: `http://localhost:3000/users/`
- Access user.html: `http://localhost:3000/users/user.html`
