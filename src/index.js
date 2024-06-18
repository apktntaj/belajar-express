import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello World" });
});

app.get("/api/users", (req, res) => {
  res.status(200).send([
    { id: 1, name: "alam" },
    { id: 2, name: "khan" },
  ]);
});

app.get("/api/products", (req, res) => {
  res.status(200).send([
    { id: 1, name: "laptop" },
    { id: 2, name: "phone" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
