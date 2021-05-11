const express = require("express");
const data = require("./data.json");

const app = express();

const port = 4000;

app.get("/", (request, response) => {
  response.send(data);
  console.log(request.method);
});

app.get("/patients", (request, response) => {
  response.send(data.patients);
});

app.get("/doctors", (request, response) => {
  response.send(data.doctors);
});

app.get("/patients/:id", (request, response) => {
  console.log(request.params.id);
  const id = request.params.id;
  const patient = data.patients.find((patients) => patients.id === id);
  response.send(patient);
});

app.listen(port, () => console.log(`Listening on ${port}`));
