const express = require("express");
const data = require("./data.json");

const app = express();

const port = 4000;

app.get("/", (request, response) => {
  response.send("Hello");
  console.log(request.method);
});

app.get("/patients", (request, response) => {
  response.send(data.patients);
});

app.get("/doctors", (request, response) => {
  response.send(data.doctors);
});

app.listen(port, () => console.log(`Listening on ${port}`));
