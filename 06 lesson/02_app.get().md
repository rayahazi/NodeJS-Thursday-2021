# App.get()

```js
app.get("/", (req, res) => res.send("GET request"));
```

- '/' - homepage(default).

* Add html:

```js
app.get("/", (req, res) => res.send("<h1>HOME PAGE</h1>"));
```

- res.json() - send a response in JSON format:

```js
app.get("/", (req, res) => res.json({ msg: "Hello" }));
```

- show the request host:

```js
app.get("/", (req, res) => res.send(req.header("host"))); // localhost:3000
```

- show the request user-agent:

```js
app.get("/", (req, res) => res.send(req.header("user-agent")));
/*
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36
*/
```

- show the request rawHeaders:

```js
app.get("/", (req, res) => res.send(req.rawHeaders));
/*
["Host","localhost:3000","Connection","keep-alive","Cache-Control","max-age=0","sec-ch-ua",
"\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"","sec-ch-ua-mobile",
"?0","Upgrade-Insecure-Requests","1","User-Agent",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36",
"Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,
*;q=0.8,application/signed-exchange;v=b3;q=0.9","Sec-Fetch-Site","none","Sec-Fetch-Mode",
"navigate","Sec-Fetch-User","?1","Sec-Fetch-Dest","document","Accept-Encoding","gzip, deflate, 
br","Accept-Language","he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6","If-None-Match",
"W/\"73-MTAct6nkTgFnuga0syYYc+1gyo4\""]
*/
```

## Add path:

We can add as many pages as we want using the path area:

```js
app.get("/about", (req, res) => res.send("<h1>About our company</h1>"));
```
