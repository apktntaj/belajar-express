import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, name: "alam" },
  { id: 2, name: "khan" },
  { id: 3, name: "jamal" },
  { id: 4, name: "kamal" },
  { id: 5, name: "rahim" },
];

const mockProducts = [
  { id: 1, name: "laptop" },
  { id: 2, name: "phone" },
  { id: 3, name: "tablet" },
  { id: 4, name: "watch" },
  { id: 5, name: "headphone" },
];

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello World" });
});

app.get("/api/users", (req, res) => {
  const { filter, value } = req.query;

  if (!filter && !value) return res.send(mockUsers);

  if (filter && value) {
    return res.send(mockUsers.filter((user) => user[filter].includes(value)));
  }
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;

  const newUser = { id: mockUsers.length + 1, name };
  mockUsers.push(newUser);
  res.status(201).send(mockUsers);
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
