import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, name: "alam" },
  { id: 2, name: "khan" },
];

const mockProducts = [
  { id: 1, name: "laptop" },
  { id: 2, name: "phone" },
];

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello World" });
});

app.get("/api/users", (req, res) => {
  res.status(200).send(mockUsers);
});

app.get("/api/products", (req, res) => {
  res.status(200).send(mockProducts);
});

app.get("/api/user/:id", (req, res) => {
  const user = mockUsers.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send({ msg: "User not found" });
  }
  res.status(200).send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
