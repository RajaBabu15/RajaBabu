//Import or REquire Statememts
const express = require("express"); //commonJS module import method
const dotenv_config = require("dotenv").config();
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT;

// require("./db/conn")
// app.use(require("./router/auth"))
app.use(require("./router/api/project"))


app.use(cors(
  {
    origin: "https://raja-babu-93mi.vercel.app/",
    credentials: true,
    methods:["GET", "POST" ]
  }

));

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname,'frontend','dist')));


app.get("/api/jokes", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://raja-babu-93mi.vercel.app');
  res.send([
    {
      id: 1,
      title: "Joke 1",
      content:
        "Why don’t pirates take a shower before they walk the plank? They just wash up on shore.",
    },
    {
      id: 2,
      title: "Joke 2",
      content:
        "A pair of cows were talking in the field. One says, “Have you heard about the mad cow disease that’s going around?” “Yeah,” the other cow says. “Makes me glad I’m a penguin.”",
    },
    {
      id: 3,
      title: "Joke 3",
      content:
        "“Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn’t have a fireplace.”",
    },
    {
      id: 4,
      title: "Joke 4",
      content:
        "“Your mother has been with us for 20 years,” said John. “Isn’t it time she got a place of her own?” “My mother?” replied Helen. “I thought she was your mother.”",
    },
    {
      id: 5,
      title: "Joke 5",
      content:
        "Why don’t pirates take a shower before they walk the plank? They just wash up on shore.",
    },
  ]);
});

app.listen(PORT, function () {
	console.log(`server start successfully on ${PORT}`)
})

module.exports = app;
