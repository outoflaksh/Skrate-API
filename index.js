const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ value: "hey" });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
