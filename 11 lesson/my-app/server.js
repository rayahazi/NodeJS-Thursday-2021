const express = require("express");
const songs = require("./songs");
const artists = require("./artists");

const app = express();
const PORT = 3000;

app.use("/songs", songs);
app.use("/artists", artists);

app.listen(PORT, () => console.log(`Listening in PORT ${PORT}...`));